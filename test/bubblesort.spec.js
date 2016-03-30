var myBubbleSort = require('../bubblesort.js');
var chai = require('chai'); // pulls in the 'chai' package installed through NPM
var expect = chai.expect;   // this is how we use chai's `expect` assertion
chai.should();              // this is how we use chai's `should` assertion

describe('My Bubble Sort', function(){

  it('should be a function', function(){
    expect(myBubbleSort).to.be.a('function');
  });

  it('should return sorted array', function(){
    var myArr2 = [4,3,2,1];
    var myArr3 = [5,1,4,7];
    var myArr4 = [10,9,21,35,17];

    expect(myBubbleSort(myArr2)).to.deep.equal([1,2,3,4]);
    expect(myBubbleSort(myArr3)).to.deep.equal([1,4,5,7]);
    expect(myBubbleSort(myArr4)).to.deep.equal([9,10,17,21,35]);
  });

});

