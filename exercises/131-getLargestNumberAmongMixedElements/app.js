function getLargestNumberAmongMixedElements(arr) {
    // your code here
    let largestNumber = 0;


  if (arr.length !== 0 && arr.some(element => typeof element === 'number')) {
    arr.map(element => {
      if (typeof element === 'number') {
        if (element > largestNumber) {
          largestNumber = element;
        }
      }
    })
  } 


  return largestNumber;
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5