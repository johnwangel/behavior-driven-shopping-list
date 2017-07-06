/* jshint esversion:6*/
const expect = chai.expect;

describe('Shopping List Item Class', function(){
  var listItem = ShoppingListItem;
  var someName = null;
  before(function(){
   someName = new ShoppingListItem('carrots', 'a vegetable');

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
  it('Should have a property of is_done', function(){
    expect(someName).to.have.ownPropertyDescriptor('is_done');
  });
  it('is_done property should be a boolean', function(){
    expect(someName.is_done).to.be.a('boolean');
  });
  it('Should have a method named check', function(){
    expect(someName.check).to.be.a('function');
  });
  it('Should reassign the value of is_done to true', function(){
    someName.check();
    expect(someName.is_done).to.be.true;
  });

  it('Should have a method named uncheck', function(){
    expect(someName.uncheck).to.be.a('function');
  });
  it('Should reassign the value of is_done to false', function(){
    someName.uncheck();
    expect(someName.is_done).to.be.false;
  });
  it('Should have a method named render', function(){
    expect(someName.render).to.be.a('function');
  });
  it('Should return a string', function(){
    expect(someName.render()).to.be.a('string');
  });
  it('It should return a li with a class of "completed_is_done"', function(){
    expect(someName.render()).contains('<li class="completed_' + someName.is_done + '">');
  });
  it('It should return a <span> with the list item name', function(){
    expect(someName.render()).contains('<span>' + someName.name + '</span>');
  });
  it('It should return a <span> with the item description', function(){
    expect(someName.render()).contains('<span>' + someName.description + '</span>');
  });
});

describe('Shopping List Class', function(){
  let list = ShoppingList;
  let someList = null;

  before(function(){
    someList = new ShoppingList();
  });

  it('Shopping list is a class', function(){
    expect(list).to.be.a('function');
  });
  it('Should have a property of items', function(){
    expect(someList).to.have.ownPropertyDescriptor('items');
  });

  it('Should have a mehtod addItem', function(){
    expect(someList.addItem).to.be.a('function');
  });
  it('Should take a ShoppingListItem object', function() {
    expect(someList.addItem).is.instanceOf(ShoppingListItem);
  });
  it('Should throw an error if not a ShoppingListItem', function(){
      var badObj = someList.addItem({});
      expect(badObj).to.throw(TypeError);
  });


});
