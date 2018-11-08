'use strict';

/*eslint-env jquery*/
/*global api, store */

// eslint-disable-next-line no-unused-vars
const bookmarkList = (function(){

  
  // function generateError(err) {
  //   let message = '';
  //   if (err.responseJSON && err.responseJSON.message) {
  //     message = err.responseJSON.message;
  //   } else {
  //     message = `${err.code} Server Error`;
  //   }

  //   return `
  //     // <section class="error-content">
  //     //   <button id="cancel-error">X</button>
  //     //   <p>${message}</p>
  //     // </section>
  //   `;
  // }

  const generateBookmarkElement = function(bookmark) {
    
    //console.log('generateBookmarkElement fired');

    return `<li class="js-bookmark-element" data-item-id="${bookmark.id}>

      <h2 class="title">${bookmark.title}</h2>
      <br>
      <span class="ratings">${bookmark.rating} stars</span>
    
      <!--start DETAILED list-->
      <div class="js-detailed-list">
      <!-- RIGHT NOW my button is useless because I'm linking the url anyway-->
        <button>
            <span class="button-label"><a href="${bookmark.url}" target="_blank">VISIT SITE</a></span>
        </button>
        <div class="description">
          <p>${bookmark.desc}</p>
        </div>
        <button>
            <span class="button-label">DELETE</span>
          </button>
      </div>
    </li>`;
  };


  const generateBookmarkElementString = function (bookmarkList) {
    
    //console.log('generateBookmarkElementString ran in bookmark.js');
    
    const bookmarks = bookmarkList.map((bookmark) => generateBookmarkElement(bookmark));
    return bookmarks.join('');
  };
  
  
  const render = function () {

    // if (store.error) {
    //   const el = generateError(store.error);
    //   $('.error-container').html(el);
    // } else {
    //   $('.error-container').empty();
    // }

    // Filter item list if store prop is true by store.ratingFilter === value
    //if this doesn't work then remove the bang
    // if (store.ratingFilter === bookmarks.rating) {
    // const bookmarks = bookmarks.filter( bookmark => !bookmark.rating);
    // }

    // render the shopping list in the DOM
    //console.log('`render` ran');
    
    console.log('store object with properties and methods @ bookmark.js', store);

    const bookmarkListItemsString = generateBookmarkElementString(store.bookmarks);

    // insert that HTML into the DOM
    $('.js-bookmark-list').html(bookmarkListItemsString);
  };
  

  const handleNewBookmarkClicked = function(){

  };
  
  const handleCreateBookmarkSubmit = function(){
    
  };
  
  const handleDeleteBookmarkClicked = function(){
    
  };
  
  const handleFilterRatingsClicked = function(){
    
  };
  
  const handleToggleDetailedClicked = function(){
    
  };

  const bindEventListeners = function(){
    handleNewBookmarkClicked();
    handleCreateBookmarkSubmit();
    handleDeleteBookmarkClicked();
    handleFilterRatingsClicked();
    handleToggleDetailedClicked();
    
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