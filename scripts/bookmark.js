'use strict';

/*

1. Pseudocodes 
2. Generate string from Api data
3. define render fn
4. more pseudocodes
5. GO HAM. 

*/


/*eslint-env jquery*/
/*global Api, Store */

// eslint-disable-next-line no-unused-vars
const Bookmarks = (function(){

  
  function generateError(err) {
    let message = '';
    if (err.responseJSON && err.responseJSON.message) {
      message = err.responseJSON.message;
    } else {
      message = `${err.code} Server Error`;
    }

    return `
      // <section class="error-content">
      //   <button id="cancel-error">X</button>
      //   <p>${message}</p>
      // </section>
    `;
  }

  const generateItemElement = function(item) {
    // const checkedClass = item.checked ? 'shopping-item__checked' : '';
    // const editBtnStatus = item.checked ? 'disabled' : '';

    // let itemTitle = `<span class="shopping-item ${checkedClass}">${item.name}</span>`;
    // if (item.isEditing) {
    //   itemTitle = `
    //     <form class="js-edit-item">
    //       <input class="shopping-item type="text" value="${item.name}" />
    //     </form>
    //   `;
    //}
  
    // return `
    //   <li class="js-item-element" data-item-id="${item.id}">
    //     ${itemTitle}
    //     <div class="shopping-item-controls">
    //       <button class="shopping-item-edit js-item-edit" ${editBtnStatus}>
    //         <span class="button-label">edit</span>
    //       </button>
    //       <button class="shopping-item-toggle js-item-toggle">
    //         <span class="button-label">check</span>
    //       </button>
    //       <button class="shopping-item-delete js-item-delete">
    //         <span class="button-label">delete</span>
    //       </button>
    //     </div>
    //   </li>`;
  };

  
  
  const generateShoppingItemsString = function (shoppingList) {
    // const items = shoppingList.map((item) => generateItemElement(item));
    // return items.join('');
  };
  
  
  const render = function () {
    // if (store.error) {
    //   const el = generateError(store.error);
    //   $('.error-container').html(el);
    // } else {
    //   $('.error-container').empty();
    // }

    // // Filter item list if store prop is true by item.checked === false
    // let items = [ ...store.items ];
    // if (store.hideCheckedItems) {
    //   items = items.filter(item => !item.checked);
    // }
  
    // Filter item list if store prop `searchTerm` is not empty
    // if (store.searchTerm) {
    //   items = items.filter(item => item.name.includes(store.searchTerm));
    // }
  
    // render the shopping list in the DOM
    // console.log('`render` ran');
    // const shoppingListItemsString = generateShoppingItemsString(items);
  
    // // insert that HTML into the DOM
    // $('.js-shopping-list').html(shoppingListItemsString);
  };


  const handleNewBookmarkClicked = function(){

  };
  
  const handleCreateBookmarkSubmit = function(){
    
  };
  
  const handleDeleteBookmarkClicked = function(){
    
  };
  
  const handleFilterRatingsClicked = function(){
    
  };
  
  const handleToggleDetailedClicked = function(){
    
  };

  const bindEventListeners = function(){
    handleNewBookmarkClicked();
    handleCreateBookmarkSubmit();
    handleDeleteBookmarkClicked();
    handleFilterRatingsClicked();
    handleToggleDetailedClicked();
    
    // Extensions below:
    //handleEditBookmarkClicked(); 
    //handleCancelEditClicked(); 
    //handleSaveEditClicked();
  };

  return {
    bindEventListeners,
    render
  };
}());