'use strict';

/*eslint-env jquery*/
/* global api, store, bookmarkList*/

// eslint-disable-next-line no-unused-vars
function main() {

  console.log('DOM is ready');

  bookmarkList.bindEventListeners();

  //Call from api to getBookmarks from DB
  api.getBookmarks(bookmarks => {

    console.log('this is bookmarks object from api.getBookmarks()', bookmarks);

    bookmarks.forEach( bookmark => {
      bookmark.expanded = false;
      store.addBookmark(bookmark);
    });
    bookmarkList.render();
  },
  error => {
    console.log('There was an error');
  });

}

$(main);
