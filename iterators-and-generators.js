function makeIterator(array){
  var nextIndex = 0;

  return {
  next: function(){
    return nextIndex < array.length ?
      {value: array[nextIndex++], done: false} :
      {done: true};
    }
  }
}

var it = makeIterator(['yo', 'ya']);
console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done);  // true



function* idMaker(){
  var index = 0;
  while(true)
    yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2