
let obj = {
  key: [1000, 11, 50, 17]
};

function getEvenElementsAtProperty(obj, key) {
  // your code here
  let newArr = [];

  if (obj.hasOwnProperty(key) && Array.isArray(obj[key]) && obj[key].length !== 0) {
    newArr = obj[key].filter(element => element % 2 === 0);
  }

  return newArr;

}
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]