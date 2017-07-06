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
    var some_html_output = '<ul> \
      <li class="completed_' + this.is_done + '"> \
        <span>' + this.name + '</span> \
        <span>' + this.description + '</span> \
      </li> \
    <ul>';
    return some_html_output;
  }
}
