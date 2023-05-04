function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  let smallNumber = 999999999999999;


  if (arr.length !== 0 && arr.some(element => typeof element === 'number')) {
    arr.map(element => {
      if (typeof element === 'number') {
        if (element < smallNumber) {
          smallNumber = element;
        }
      }
    })
  } else return 0;


  return smallNumber;
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4