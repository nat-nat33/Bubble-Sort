function mergeSort (items) {
 if (items.length < 2) {
  return items;
 }

  var middle = Math.floor(items.length / 2),
   left = items.slice(0, middle),
   right = items.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
 var result = [];

  while(left.length || right.length) {
    if(left.length && right.length) {
      if(left[0] < right[0]) {
        result.push(left.shift());
      }
      else {
        result.push(right.shift());
      }

    }
    else if (left.length) {
      result.push(left.shift());
    }
    else {
      result.push(right.shift());
    }
  }
 console.log('poop');
  return result;

}

