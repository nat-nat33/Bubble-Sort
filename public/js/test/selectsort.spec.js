describe('Select Sort', function(){

  it('should be a function', function(){
    expect(selectSort).to.be.a('function');
  });

  it('should take in an array argument', function () {
    expect(arguments).to.equal(arguments);
  });

  it('should return sorted array', function(){
    var myArr2 = [4,3,2,1];
    var myArr3 = [5,1,4,7];
    var myArr4 = [10,9,21,35,17];

    expect(selectSort(myArr2)).to.deep.equal([1,2,3,4]);
    expect(selectSort(myArr3)).to.deep.equal([1,4,5,7]);
    expect(selectSort(myArr4)).to.deep.equal([9,10,17,21,35]);
  });

});