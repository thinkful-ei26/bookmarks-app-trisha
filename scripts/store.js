'use strict';

/*eslint-env jquery*/

// eslint-disable-next-line no-unused-vars
const store = (function(){


  //need to add the bookmark to the store before it gets rendered
  const addBookmark = function(bookmark) {
    this.bookmarks.push(bookmark);
  };

  const setError = function(error) {
    this.error = error;
  };

  const findBookmarkById = function(id){
    return this.bookmarks.find(bookmark => bookmark.id === id);
  };

  //
  const findAndDelete = function(id) {
    this.bookmarks = this.bookmarks.filter(bookmark => bookmark.id !== id);
  };

  const setFilterRating = function (filter_rating){
    this.filter = filter_rating;
  };

  const toggleExpandedForBookmark = function(id){
    const bookmark = this.findBookmarkById(id);
    bookmark.expanded = !bookmark.expanded;
  };

  const toggleNewBookmark = function(){
    store.adding = !store.adding;
  };

  //still needs some work
  const findAndUpdate = function(id, newBookmark) {
    const bookmark = this.findBookmarkById(id);
    console.log('this is from findAndUpdate', bookmark);
    Object.assign(bookmark, newBookmark);
  };


  return {
    bookmarks: [],
    filter: null,
    error: null,
    adding: false,

    addBookmark,
    findAndDelete,
    toggleExpandedForBookmark,
    setError,
    setFilterRating,
    findAndUpdate,
    findBookmarkById,
    toggleNewBookmark,
  };
}());
