/* jshint esversion:6*/
const expect = chai.expect;

describe('Shopping List Item Class', function(){
  var listItem = ShoppingListItem;
  var someName = null;
  before(function(){
   someName = new ShoppingListItem('carrots');
 });
  it('Shopping list item is a class', function(){
    expect(listItem).to.be.a('function');
  });

  it('Should have a property of name', function(){
    expect(listItem).to.have.ownPropertyDescriptor('name');
  });

  it('Name property should be a string', function(){
    expect(someName.name).to.be.a('string');
  });
  it('Should have a property of description', function(){
    expect(someName).to.have.ownPropertyDescriptor('description');
  });
  it('Description property should be a string', function(){
    expect(someName.description).to.be.a('string');
  });
});