'use strict';

/*eslint-env jquery*/
/* global api, store, bookmarkList*/

//.fn.extend will return an object with the stringified obj.
// $.fn.extend({
//   serializeJson: function() {
//     const obj = {};
//     const data = new FormData(this[0]);
//     data.forEach((value, key) => {
//       obj[key] = value;
//     });
//     return JSON.stringify(obj);
//   }
// });

// eslint-disable-next-line no-unused-vars
//function main() {
// console.log('DOM is ready');

// bookmarkList.bindEventListeners();

// api.getBookmarks(
//   (bookmarks) =>
//     bookmarks.forEach( (bookmark) => store.addBookmark(bookmark));
//     bookmarkList.render();
// });


// $('.js-bookmark-add-form').on('submit', e => {
//   e.preventDefault();
//   const addBookmarkObj = $(e.target).serializeJson();

//   console.log('this is e.target',e.target);

//   console.log('this is addBookmarkObj of .serializeJson in the index.js on submit of SAVE BOOKMARK button', addBookmarkObj);
// });

//}



// eslint-disable-next-line no-unused-vars
function main() {

  console.log('DOM is ready');

  bookmarkList.bindEventListeners();

  //Call from api to getBookmarks from DB
  api.getBookmarks(bookmarks => {

    console.log('this is bookmarks object from api.getBookmarks()', bookmarks);

    bookmarks.forEach( bookmark => {
      bookmark.expanded = false;
      bookmark.editing = false;
      store.addBookmark(bookmark);
      store.bookmarkIndex();
    });
    bookmarkList.render();
  },
  error => {
    console.log('An error occured');
  });

}

$(main);
