describe('Merge Sort', function(){

  it('should be a function', function(){
    expect(mergeSort).to.be.a('function');
  });

  it('should take in an array argument', function () {
    expect(arguments).to.equal(arguments);
  });

  it('should return sorted array', function(){
    var myArr2 = [4,3,2,1];
    var myArr3 = [5,1,4,7];
    var myArr4 = [10,9,21,35,17];
    var myArr5 = [25,12,3,5,7,11,2,9,1,16,10,4,15,19,21];

    expect(mergeSort(myArr2)).to.deep.equal([1,2,3,4]);
    expect(mergeSort(myArr3)).to.deep.equal([1,4,5,7]);
    expect(mergeSort(myArr4)).to.deep.equal([9,10,17,21,35]);
    expect(mergeSort(myArr5)).to.deep.equal([ 1, 2, 3, 4, 5, 7, 9, 10, 11, 12, 15, 16, 19, 21, 25 ]);
  });

});