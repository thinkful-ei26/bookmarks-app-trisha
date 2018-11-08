'use strict';

/*eslint-env jquery*/
/* global Api, Store, Bookmarks*/

$.fn.extend({
  serializeJson: function() {
    const obj = {};
    const data = new FormData(this[0]);
    data.forEach((value, key) => {
      obj[key] = value;
    });
    return JSON.stringify(obj);
  }
});

function main() {
  $('.js-bookmark-add-form').on('submit', e => {
    e.preventDefault();
    const result = $(e.target).serializeJson(); 
    
    console.log('this is e.target',e.target);

    console.log('this is result of .serializeJson', result);
  });
}

$(main);