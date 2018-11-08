'use strict';

//EVERYTHING HERE SHOULD JUST BE ABOUT API CALLS


/*eslint-env jquery*/ 

// eslint-disable-next-line no-unused-vars
const Api = (function() {
  
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/trisha';


  // GET request to the DB 
  // pretty please return the raw data that I need so I can cherry-pick properties that I need for my awesome app
  function getBookmarks(callback) {
    $.getJSON(`${BASE_URL}/bookmarks`, callback);
  }

  // POST request to DB for creating a new bookmark 
  function createBookmark(name, onSuccess, onError) {
    const newBookmark = JSON.stringify({name});

    $.ajax({
      url: `${BASE_URL}/bookmarks`,
      method: 'POST',
      contentType: 'application/json',
      data: newBookmark,
      success: onSuccess,
      error: onError
    });
  }

  // PATCH request for updating a bookmark
  const updateBookmark = function (id, updateData, onSuccess, onError) {
    $.ajax({
      url: `${BASE_URL}/bookmarks/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify(updateData),
      success: onSuccess,
      error: onError
    });
  };

  // DELETE request to database to delete a bookmark
  const deleteBookmark = function (id, onSuccess, onError) {
    $.ajax({
      url: `${BASE_URL}/bookmarks/${id}`,
      method: 'DELETE',
      success: onSuccess,
      error: onError
    });
  };


  return {
    getBookmarks,
    createBookmark,
    updateBookmark,
    deleteBookmark
  };
})();