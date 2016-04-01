function selectSort(arr){
  var len = arr.length,
    min;

  for (i=0; i < len; i++){
    min = i;
      console.log('blah', min);
      for (j=i+1; j < len; j++){
        if (arr[j] < arr[min]){
          min = j;
          console.log('poop',min);
            }
        }  if (i != min){
            swap(arr, i, min);
        }
    }

    return arr;
}

//swapping samsies from bubbsort
function swap(arr, first, second){
    var temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}