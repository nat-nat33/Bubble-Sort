var myBubbleSort = require('../bubblesort.js');
var chai = require('chai'); // pulls in the 'chai' package installed through NPM
var expect = chai.expect;   // this is how we use chai's `expect` assertion
chai.should();              // this is how we use chai's `should` assertion



describe('My Bubble Sort', function(){
  var result = myBubbleSort([8,10,2,1,5,9,4,3]);
  it('should be a function', function(){
    expect(myBubbleSort).to.a('function');
  });

  it('should take in an array argument', function () {
    expect(arguments).to.equal(arguments);
    expect(arguments).to.have.length.below(9);
  });

});