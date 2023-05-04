function computeProductOfAllElements(arr) {
  // your code here
  let compute = 1;

  if (arr.length !== 0) {
    arr.forEach(element => {
      compute *= element;
    });
  } else return 0;

  return compute;

}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60

