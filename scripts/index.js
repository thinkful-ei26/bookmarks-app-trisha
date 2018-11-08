'use strict';

/*eslint-env jquery*/
/* global Api, Store, Bookmarks*/




//.fn.extend will return an object with the stringified obj
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
function main() {
  console.log('DOM is ready');
  // $('.js-bookmark-add-form').on('submit', e => {
  //   e.preventDefault();
  //   const addBookmarkObj = $(e.target).serializeJson(); 
    
  //   console.log('this is e.target',e.target);

  //   console.log('this is addBookmarkObj of .serializeJson in the index.js on submit of SAVE BOOKMARK button', addBookmarkObj);
  // });

}

$(main);