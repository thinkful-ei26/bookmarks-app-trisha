'use strict';

/*eslint-env jquery*/
/* global Api, Store, Bookmarks*/

$(main);

function main() {
  $('.js-bookmark-add-form').on('submit', e => {
    e.preventDefault();
    console.log('submitted js-bookmark-add-form');
  });
}

