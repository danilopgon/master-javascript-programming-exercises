function getLargestElement(arr) {
  // your code here
  let largestElement = 0;

  if (arr.length !== 0) {

    largestElement = arr[0];

    arr.filter(element => element > largestElement ? largestElement = element : null); 
  
  }
  
  return largestElement;
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;