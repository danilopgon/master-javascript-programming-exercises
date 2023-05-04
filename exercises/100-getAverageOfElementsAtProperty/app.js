function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  let sum = 0;

  if (obj.hasOwnProperty(key) && Array.isArray(obj[key]) && obj[key].length !== 0) {
    obj[key].forEach(element => {
      sum += element;
    });
  } else return 0;

  const average = sum / obj[key].length;
  return average;
 

}

let obj = {
  key: [1, 2, 3]
};
let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2  
