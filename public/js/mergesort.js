function mergeSort (items) {
 if (items.length < 2) {
  return items;
 }

  var middle = Math.floor(items.length / 2),
   left    = items.slice(0, middle),
   right   = items.slice(middle);

  return concat(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
 var result = [];

  while(left.length || right.length) {
    if(left.length && right.length) {

  }

  return result;

}

