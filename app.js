/* jshint esversion:6*/
const shoppingCart = document.getElementById('content');
const title = document.getElementsByName('title');
const description = document.getElementsByName('description');
let list = new ShoppingList();
let renderOuput = list.render();
shoppingCart.innerHTML = renderOuput;

function add_to_shopping_list(){
  var new_shopping_list_item = new ShoppingListItem(title[0].value, description[0].value);
  list.addItem(new_shopping_list_item);
  shoppingCart.innerHTML = list.render();

  var inputBox = document.querySelectorAll("input[type='checkbox']");
  for (var i = 0; i < inputBox.length; i++) {
    inputBox[i].addEventListener('click', (e) => {
      changeCheckedStatus(i, e.target);
    });
  }

  title[0].value = '';
  description[0].value = '';
}

function changeCheckedStatus(idx, checkbox){
  if (checkbox.checked) {
    list.items[idx-1].check();
  } else {
    list.items[idx-1].uncheck();
  }
}

let button = document.getElementById('add_shopping_list_item_button');
button.addEventListener('click', (e) => {
  e.preventDefault();
  add_to_shopping_list();
});