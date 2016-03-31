describe('Quick Sort', function(){

  it('should be a function', function(){
    expect(quickSort).to.be.a('function');
  });

  it('should take in an array argument', function () {
    expect(arguments).to.equal(arguments);
  });

  it('should return sorted array', function(){
    var myArr2 = [4,3,2,1];
    var myArr3 = [5,1,4,7];
    var myArr4 = [10,9,21,35,17];

    expect(quickSort(myArr2)).to.deep.equal([1,2,3,4]);
    expect(quickSort(myArr3)).to.deep.equal([1,4,5,7]);
    expect(quickSort(myArr4)).to.deep.equal([9,10,17,21,35]);
  });

});

// describe('Prototype My Bubble Sort', function () {
//   var myArr2 = [4,3,2,1];
//   var myArr3 = [5,1,4,7];
//   var myArr4 = [10,9,21,35,17];

//   it('should be a method on array prototype', function () {
//     myArr2.should.have.property('myBubbleSort');
//     myArr3.should.have.property('myBubbleSort');
//     myArr4.should.have.property('myBubbleSort');
//   });

//   it('should return a sorted array', function () {
//     expect(myArr2.myBubbleSort()).to.deep.equal([1,2,3,4]);
//     expect(myArr3.myBubbleSort()).to.deep.equal([1,4,5,7]);
//     expect(myArr4.myBubbleSort()).to.deep.equal([9,10,17,21,35]);
//   });

// });