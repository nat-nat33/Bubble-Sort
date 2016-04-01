
var newArr = [];

function randomArr () {
  var maxNumber = 20;
  var minNumber = 1;

  for( var i = 0; i < 50; i++){
    var number = Math.floor(Math.random()*(maxNumber - minNumber) + minNumber);
    if(newArr.indexOf(number) === -1){
    newArr.push(number);
    }
  }

  newArr.push(maxNumber);
  return newArr;
}

randomArr();

function createDivs () {
  for(var i = 0; i< newArr.length; i++){
    var div = document.createElement('div');
    div.className = 'blocks';
    div.id = 'block' + i;
    div.style.height = (newArr[i]*20) + 'px';
    document.getElementById('display').appendChild(div).innerHTML= newArr[i];
  }
}

createDivs();
