'use strict';

/*
1. write pseudocode based on user stories
2. figure out what parameters goes into the functions
3. write the functions
*/

// eslint-disable-next-line no-unused-vars
const Store = (function(){

  const addBookmark = function(){

  };


  const setError = function(){

  };
  
  const findById = function(){

  };
  
  const setFilterRating = function(){

  };
  
  const findAndDelete = function(){

  };
  
  const findAndUpdate = function(){

  };
  
  const toggleBookmarkFilter = function(){

  };
  
  const toggleBookmarkExpanded = function(){

  };


  return {
    bookmarks: [],
    error: null,
    ratingFilter: 0,

    addBookmark,
    setError,
    findById, 
    setFilterRating,
    findAndDelete,
    findAndUpdate,
    toggleBookmarkFilter,
    toggleBookmarkExpanded,
    //findAndEdit  <--- extended feature
  };
}());