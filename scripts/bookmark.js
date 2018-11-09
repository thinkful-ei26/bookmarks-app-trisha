'use strict';

/*eslint-env jquery*/
/*global store, api */

// eslint-disable-next-line no-unused-vars
const bookmarkList = (function(){

  const generateBookmarkElement = function(bookmark){

    //on CONDENSED view, set the ratings and description equal to:
    let rating = undefined;
    if(bookmark.rating === null){
      rating = 'No rating';
    } else {
      rating = `${bookmark.rating} stars`;
    }

    let description = '';
    if(bookmark.desc === null){
      description = 'No description';
    } else {
      description = `${bookmark.desc}`;
    }


    //when the view is EXPANDED please return:
    if (bookmark.expanded){
      return `
      <li class="bookmark-element js-bookmark-element" data-bookmark-id="${bookmark.id}">
        <form class="editing-form js-editing-form">
          <fieldset>
            <legend class="bookmark-title js-bookmark-title">
              ${bookmark.title}
            </legend>
              <div>
                <p>${rating}</p>
                <p>${description}</p>
                <br>
                <a href="${bookmark.url} class="visit-site" target="_blank">Visit Site</a>
                <br>
                <br>
                <!-- !!!!consider an icon for hide and expand !!!! -->
                <p> Click anywhere to hide </p>
                <br>
                <button class="delete-bookmark  js-delete-bookmark">Delete</button>
              </div>
            </fieldset>
          </form>
        </li>`;
    } else { //this will return CONDENSED view
      return `
      <li class="bookmark-element js-bookmark-element" data-bookmark-id="${bookmark.id}">
        <form class="editing-form js-editing-form">
          <fieldset>
            <legend class="bookmark-title js-bookmark-title">
              ${bookmark.title}
            </legend>
            <p>${rating}</p>
            <!-- !!!!consider an icon for hide and expand !!!! -->
            <p>Click anywhere to expand</p>
            <br>
            <button class="delete-bookmark js-delete-bookmark">Delete</button>
          </fieldset>
        </form>
    </li>`;
    }
  };


  //the handler is broken REVISIT, able to grab it but won't render maybe need to do something with the event
  //could be that I'm toggling the wrong thing?
  const handleNewBookmarkClicked = function(){
    console.log('handleNewBookmarkClicked fired');

    $('.js-new-bookmark').on('click', event => {
      store.toggleAddingABookmark(event);

      $('form').toggle();
      store.setError(null);

      renderAddBookmarkForm();
    });
  };

  const handleCancelNewBookmark = function(){
    $('form').on('click', '.js-cancel-new-bookmark-button', event => {

      store.toggleAddingABookmark();

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

      api.createBookmark(newBookmark,
        bookmark => {
          bookmark.expanded = false;
          store.toggleAddingABookmark();

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

  const generateAddBookmarkForm = function(){

    return `
    <form class="newBookmark-form js-newBookmark-form">
      <fieldset>
        <legend>Create a new bookmark</legend>
          <br>
          <label for="title"> Title:</label>
          <br>
          <input for="title" name="title" type="text" class="input-bookmark-title js-input-bookmark-title" placeholder="Example">
          <br>
          <br>
          <label for="url">url:</label>
          <br>
          <input for="url" name="url" type="text" class="input-bookmark-url js-input-bookmark-url" placeholder="https://www.example.com/">
          <br>
          <br>
          <label for="description">Description:</label>
          <br>
          <textarea for="description" name="description" name="bookmark-desc" class="input-bookmark-desc js-input-bookmark-description" placeholder="This is a really awesome description"></textarea>
          <br>
          <br>
          <label for="rating">Rating:</label>
          <br>
          <select for="rating" name="rating" class="input-bookmark-rating js-input-bookmark-rating">
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


  const getIdFromBookmark = function(bookmark) {
    return $(bookmark).closest('.js-bookmark-element').data('bookmark-id');
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

    $('.js-bookmark-list').on('click', event =>{
      const id = getIdFromBookmark(event.target);
      store.toggleExpandedForBookmark(id);
      render();
    });
  };

  const handleFilterRatingsClicked = function(){

    $('.js-filter-rating-dropdown').change(event=>{

      const filter_rating = $('.js-filter-rating-dropdown').val();
      store.setFilterRating(filter_rating);
      render();
    });
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
