'use strict';

/*
1. write pseudocode based on user stories
2. figure out what parameters goes into the functions
3. write the functions
*/

// eslint-disable-next-line no-unused-vars
const store = (function(){


  //need to add the bookmark to the store before it gets rendered
  const addBookmark = function(bookmark) {
    this.bookmarks.push(bookmark);
  };


  const setError = function(error) {
    this.error = error;
  };
  
  const findById = function(id) {
    return this.bookmarks.find(bookmark => bookmark.id === id);
  };
  
  const findAndDelete = function(id) {
    this.bookmarks = this.bookmarks.filter(bookmark => bookmark.id !== id);
  };

  const findAndUpdate = function(id, newData) {
    const bookmark = this.findById(id);
    Object.assign(bookmark, newData);
  };

  //not sure about this probably fcked up. gotta get the bookmarks.rating === ratingFilter
  const setFilterRating = function(rating){
    this.rating = rating;
  };
  

  const toggleBookmarkFilter = function(){
    this.hideFilteredBookmarks = !this.hideFilteredBookmarks;
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