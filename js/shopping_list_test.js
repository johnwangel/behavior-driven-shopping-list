/* jshint esversion:6*/

const chai = require('chai');
const expect = chai.expect;
const ShoppingListItem = require('../shopping_list_item.js');

describe('Shopping List Item Class', function(){
  it('Shopping list item is a class', function(){
    expect(ShoppingListItem).to.be.instanceOf(ShoppingListItem);
  });
});