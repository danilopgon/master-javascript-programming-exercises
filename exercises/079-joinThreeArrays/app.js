function joinThreeArrays(arr1, arr2, arr3) {
  // your code here
  const newArr = arr1.concat(arr2, arr3);
  return newArr;
  
}

let output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
console.log(output); // --> [1, 2, 3, 4, 5, 6]
