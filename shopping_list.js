/* jshint esversion:6*/
class ShoppingList{
  constructor(){
    this.items = [];
  }
  addItem(shopItem){
    if (!(shopItem instanceof ShoppingListItem)){
      throw new TypeError('You can\'t put that there, buddy!');
    }
    this.items.push(shopItem);
  }

  removeItem(shopItem){
    if (this.items.some( ( thisItem ) => {
      return thisItem === shopItem;
    })) {
      this.items.splice(this.items.indexOf(shopItem), 1);
    } else if ( shopItem === undefined ) {
      this.items.pop();
    } else {
      throw new Error('You can\'t put that there, buddy!');
    }
  }

}