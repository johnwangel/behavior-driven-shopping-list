/* jshint esversion:6*/
const shoppingCart = document.getElementById('content');
const title = document.getElementsByName('title');
const description = document.getElementsByName('description');
let list = new ShoppingList();
let renderOuput = list.render();
shoppingCart.innerHTML = renderOuput;

function add_to_shopping_list(){
  var new_shopping_list_item = new ShoppingListItem(title.innerHTML, description.innerHTML);
  console.log(title.innerHTML);
  console.log(description.innerHTML);
  list.addItem(new_shopping_list_item);
  shoppingCart.innerHTML = list.render();
}

let button = document.getElementById('add_shopping_list_item_button');

button.addEventListener('click', (e) => {
  e.preventDefault();
  add_to_shopping_list();
});