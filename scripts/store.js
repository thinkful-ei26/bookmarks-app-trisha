'use strict';

/*eslint-env jquery*/

// eslint-disable-next-line no-unused-vars
const store = (function(){


  //need to add the bookmark to the store before it gets rendered
  const addBookmark = function(bookmark) {
    this.bookmarks.push(bookmark);
  };

  //
  const setError = function(error) {
    this.error = error;
  };

  //
  const findBookmarkById = function(id){
    return this.bookmarks.find(bookmark=> bookmark.id===id);
  };

  //
  const findAndDelete = function(id) {
    this.bookmarks = this.bookmarks.filter(bookmark => bookmark.id !== id);
  };


  //not sure about this probably fcked up. gotta get the bookmarks.rating === filterRating
  // if this doesnt work then switch line 37
  const setFilterRating = function (filter_rating){
    this.filter = filter_rating;
  };

  //
  const toggleEditedForBookmark = function(id){
    const bookmark = this.findBookmarkById(id);
    bookmark.editing=!bookmark.editing;
  };

  //
  const toggleExpandedForBookmark = function(id){
    const bookmark = this.findBookmarkById(id);
    bookmark.expanded = !bookmark.expanded;
  };

  //
  const toggleAddingABookmark = function(){
    store.adding = !store.adding;
  };

  //still needs some work
  const findAndUpdate = function(id, newBookmark) {
    const bookmark = this.findBookmarkById(id);
    console.log('this is from findAndUpdate', bookmark);
    Object.assign(bookmark, newBookmark);
  };


  //this is probably not the best representation of finding the bookmark index
  const bookmarkIndex = function(){
    for (let i = 0; i < this.bookmarks.length; i++){
      console.log('this is i', i);
      //console.log('this.bookmarks.indexOf(i)', this.bookmarks.indexOf());
    }
  };

  return {
    bookmarks: [],
    filter: null,
    error: null,
    adding: false,
    bookmarkIndex,

    addBookmark,
    findAndDelete,
    toggleExpandedForBookmark,
    setError,
    setFilterRating,
    toggleEditedForBookmark,
    findAndUpdate,
    findBookmarkById,
    toggleAddingABookmark
  };
}());
