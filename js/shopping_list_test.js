/* jshint esversion:6*/

 //const chai = require('chai');
 const expect = chai.expect;
 //const shoppingListItem = require('../shopping_list_item.js');

describe('Shopping List Item Class', function(){
  var listItem = ShoppingListItem;

  it('Shopping list item is a class', function(){
    expect(listItem).to.be.a('function');
  });

  it('Should have a property name', function(){
    expect(listItem).to.have.ownPropertyDescriptor('name');
  });

  it('Name property should be a string', function(){
    expect(listItem).to.have.be.a('string');
  });

});