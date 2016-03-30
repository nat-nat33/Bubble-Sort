function myBubbleSort(arr) {
  var length = arr.length;
  for (var i = 0; i < length; i++) {
    for (var j = 0; j < (length - i - 1); j++) {
      if(arr[j] > arr[j+1]) {
        var tmp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = tmp;
      }
    }
  }
  return arr;
}

Array.prototype.myBubbleSort = function () {
  var length = this.length;
  for (var i = 0; i < length; i++) {
    for (var j = 0; j < (length - i - 1); j++) {
      if(this[j] > this[j+1]) {
        var tmp = this[j];
        this[j] = this[j+1];
        this[j+1] = tmp;
      }
    }
  }
  return this;
};





module.exports = myBubbleSort;