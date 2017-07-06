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

  render() {
    var renderOutput =
    '<li class="completed_' + this.is_done + '"> \
    <span>' + this.name + '</span> \
    <span>' + this.description + '</span> \
    </li>';
    return renderOutput;
  }
}