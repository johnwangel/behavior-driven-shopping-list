/* jshint esversion:6*/

class ShoppingListItem {
  constructor(name, description){
    this.name = name;
    this.description = description;
    this.is_done = false;
  }

  check() {
    this.is_done = true;
  }
  uncheck() {
    this.is_done = false;
  }

  render(n) {
    let listItem = document.createElement('li');
    listItem.setAttribute('class', 'completed_' + this.is_done);
    let inputBox = document.createElement('input');
    inputBox.setAttribute('type', 'checkbox');
    listItem.appendChild(inputBox);

    let nameSpan = document.createElement('span');
    nameSpan.textContent = this.name + ": ";
    listItem.appendChild(nameSpan);

    let descSpan = document.createElement('span');
    descSpan.textContent = this.description;
    listItem.appendChild(descSpan);

    let butt = document.createElement('button');
    butt.setAttribute('type', 'remove');
    butt.textContent = 'x';
    listItem.appendChild(butt);

    return listItem;
  }

  //   render(n) {
  //   let listItem = document.createElement('li');
  //   listItem.setAttribute("class", "completed_" + this.is_done);


  //   var renderOutput =
  //   '<li class="completed_' + this.is_done + '"> \
  //   <input type="checkbox"><span>' + this.name + ': </span> \
  //   <span>' + this.description + '</span> <button type="remove">x</button>\
  //   </li>';

  //   return renderOutput;
  // }


}
