function getNthElement(array, n) {
  // Add your code after this line
  let element;

if (array.length !== 0) {
  element = array[n];
}

  return element;
  
}

let output = getNthElement([1, 3, 5], 1);
console.log(output); // --> 3
