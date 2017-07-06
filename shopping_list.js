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

//var badFn = function () { throw new TypeError('Illegal salmon!'); };

}