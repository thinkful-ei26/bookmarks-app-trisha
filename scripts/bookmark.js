'use strict';

/*eslint-env jquery*/
/*global store, api */

// eslint-disable-next-line no-unused-vars
const bookmarkList = (function(){

  /* ************ helper fns ************ */

  const getIdFromBookmark = function(bookmark) {
    return $(bookmark).closest('.js-bookmark-element').data('bookmark-id');
  };

  //Grabs the obj we need to send to the API for POST requests
  //make sure to strigify it before sending to POST or PATCH
  $.fn.extend({
    serializeJson: function(){
      const obj = {};
      const data = new FormData(this[0]);
      data.forEach((value,key)=>{
        obj[key] = value;
      });
      return obj;
    }
  });

  /* ************ handler fns ************ */

  //my description not working when creating a new bookmark
  
  const handleNewBookmarkClicked = function(){
    console.log('handleNewBookmarkClicked fired');

    $('.js-new-bookmark').on('click', event => {
      store.toggleNewBookmark(event);

      $('form').toggle();
      store.setError(null);

      renderAddBookmarkForm();
    });
  };

  const handleCancelNewBookmark = function(){
    $('form').on('click', '.js-cancel-new-bookmark-button', event => {

      store.toggleNewBookmark();

      $('form').toggle();
      store.setError(null);

      renderAddBookmarkForm();
    });
  };

  const handleCreateBookmarkSubmit = function(){
    console.log('handleCreateBookmark');

    $('form').on('submit', event => {
      event.preventDefault();
      
      const newBookmark = $(event.target).serializeJson();
      
      //console.log('this is newBookmark before APIcall', newBookmark);
      /* 
      this is newBookmark before APIcall 
      { title: "test", 
        url: "http://www.something.com",
        description: "test"
      }
      */

      api.createBookmark(newBookmark,
        bookmark => {
          bookmark.expanded = false;
          store.toggleNewBookmark();

          // toggle <form> below to hide it
          $('form').toggle();
          store.addBookmark(bookmark);
          store.setError(null);
          renderAddBookmarkForm();
          render();
        },

        error => {
          store.setError(error.responseJSON.message);
          showErrorMessage(store.error);
        }
      );
      
    });
  };

  const handleDeleteBookmarkClicked = function(){
    $('.js-bookmark-list').on('click', '.js-delete-bookmark', event=>{

      const id = getIdFromBookmark(event.target);

      // api delete request
      api.deleteBookmark(id, ()=> {
        store.findAndDelete(id);
        render();
      });
    });
  };

  const handleToggleExpandClicked = function(){

    $('.js-bookmark-list').on('click', '.expand', event =>{
      const id = getIdFromBookmark(event.target);
      store.toggleExpandedForBookmark(id);
      render();
    });
  };

  const handleFilterRatingsClicked = function(){

    $('.js-filter-rating-dropdown').change( event =>{

      const filter_rating = $('.js-filter-rating-dropdown').val();
      store.setFilterRating(filter_rating);
      render();
    });
  };


  /* ************ generate bookmark elements & strings fns ************ */

  const generateBookmarkElement = function(bookmark){

    //on CONDENSED view, set the ratings and description equal to:
    let rating = undefined;
    if(bookmark.rating === null){
      rating = 'No rating';
    } else {
      rating = `${bookmark.rating} stars`;
    }

    //not working 
    let desc = '';
    if(bookmark.desc === null){
      desc = 'No description';
    } else {
      desc = `${bookmark.desc}`;
    }

    // console.log('bookmark.des', desc);
    // console.log('this is bookmark', bookmark);

    //when the view is EXPANDED please return:
    if (bookmark.expanded){
      return `
      <li class="bookmark-element js-bookmark-element" data-bookmark-id="${bookmark.id}">
        <button class="expand btn-expand" aria-label="Click toggle expand or hide details">
          <h2 class="bookmark-title js-bookmark-title">
          ${bookmark.title}
          </h2>
        </button>
        <p>${rating}</p>
          <div class="expandedView">
            <p>${desc}</p>
            <button class="visit">
              <a href="${bookmark.url}" class="visit-site" target="_blank" arial-label="Click to open bookmark on a new tab">Visit </a>
              <i class="fa fa-external-link" aria-hidden="true"></i>
            </button>
            <br>
            <br>
            <button class="delete-bookmark  js-delete-bookmark">Delete <i class="fa fa-trash"></i></button>
          </div>
      </li>`;
    } else { //this will return CONDENSED view
      return `
      <li class="bookmark-element js-bookmark-element" data-bookmark-id="${bookmark.id}">
          <button class="expand">
            <h2 class="bookmark-title js-bookmark-title">
              ${bookmark.title}
            </h2>
          </button>
          <p>${rating}</p>
          <br>
          <button class="delete-bookmark js-delete-bookmark">Delete <i class="fa fa-trash"></i></button>
    </li>`;
    }
  };

  const generateAddBookmarkForm = function(){

    return `
    <form class="newBookmark-form js-newBookmark-form">
      <fieldset>
        <legend>Create a new bookmark</legend>
          <br>
          <label for="title"> Title:</label>
          <br>
          <input for="title" name="title" type="text" class="input-bookmark-title js-input-bookmark-title" aria-label="New bookmark title input" placeholder="Example">
          <br>
          <br>
          <label for="url">url:</label>
          <br>
          <input for="url" name="url" type="text" class="input-bookmark-url js-input-bookmark-url" aria-label="New bookmark url input" placeholder="https://www.example.com/">
          <br>
          <br>
          <label for="desc">Description:</label>
          <br>
          <textarea for="desc" name="desc" class="input-bookmark-desc js-input-bookmark-desc" aria-label="new bookmark input description" placeholder="This is a really awesome description"></textarea>
          <br>
          <br>
          <label for="rating">Rating:</label>
          <br>
          <select for="rating" name="rating" class="input-bookmark-rating js-input-bookmark-rating" aria-label="new bookmark dropdown rating">
            <option selected disabled>Select a rating</option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Star</option>
          </select>
          <br>
          <p class="error-message js-error-message"></p>
          <button type="submit" class="create-bookmark-button js-create-bookmark-button">
            SAVE BOOKMARK
          </button>
          <button type="button" class="cancel-create-bookmark-button js-cancel-new-bookmark-button">CANCEL</button>
      </fieldset>
    </form>`;
  };

  const generateBookmarkElementString = function(bookmarks) {
    //console.log('generateBookmarkElementString ran in bookmark.js');
    return bookmarks.map( bookmark => generateBookmarkElement(bookmark)).join('');
  };

  /* ************ rendering fns ************ */
  const render = function(){

    let bookmarks = [...store.bookmarks];

    if (store.filter){
      bookmarks = bookmarks.filter( bookmark => bookmark.rating >= store.filter);
    }

    const html = generateBookmarkElementString(bookmarks);
    $('.js-bookmark-list').html(html);

  };

  // addBookmark form rendering
  const renderAddBookmarkForm = function(){
    if(store.adding) {
      $('.js-add-new-bookmark-form').html(generateAddBookmarkForm() );
    }
    else{
      $('.js-add-new-bookmark-form').html('');
    }
  };


  /* ************ display error in a nice way fns ************ */

  const showErrorMessage = function (error){
    $('.js-error-message').html(error);
  };


  const bindEventListeners = function(){
    handleNewBookmarkClicked();
    handleCancelNewBookmark();
    handleCreateBookmarkSubmit();
    handleDeleteBookmarkClicked();
    handleFilterRatingsClicked();
    handleToggleExpandClicked();

    // Extensions below:
    //handleEditBookmarkClicked();
    //handleCancelEditClicked();
    //handleSaveEditClicked();

  };

  return {
    bindEventListeners,
    render
  };
}());
