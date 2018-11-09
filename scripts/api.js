'use strict';

//EVERYTHING HERE SHOULD JUST BE ABOUT API CALLS

/*eslint-env jquery*/

// eslint-disable-next-line no-unused-vars
const api = (function() {

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/trisha';


  // GET request to the DB
  const getBookmarks = function(onSuccess, onError) {

    $.ajax({
      url: `${BASE_URL}/bookmarks`,
      method: 'GET',
      contentType: 'application/json',
      success: onSuccess,
      error: onError
    });
  };

  // POST request to DB for creating a new bookmark
  const createBookmark = function (name, onSuccess, onError) {
    const newBookmark = JSON.stringify({name});

    $.ajax({
      url: `${BASE_URL}/bookmarks`,
      method: 'POST',
      contentType: 'application/json',
      data: newBookmark,
      success: onSuccess,
      error: onError
    });
  };

  // PATCH request for updating a bookmark
  const updateBookmark = function (updatedBookmark, id, onSuccess, onError) {
    $.ajax({
      url: `${BASE_URL}/bookmarks/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify(updatedBookmark),
      success: onSuccess,
      error: onError
    });
  };

  // DELETE request to database to delete a bookmark
  const deleteBookmark = function (id, onSuccess) {
    $.ajax({
      url: `${BASE_URL}/bookmarks/${id}`,
      method: 'DELETE',
      success: onSuccess,
    });
  };


  return {
    getBookmarks,
    createBookmark,
    updateBookmark,
    deleteBookmark
  };
})();
