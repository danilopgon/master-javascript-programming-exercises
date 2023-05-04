let obj = {
  key: [2, 1, 5]
};

function getSquaredElementsAtProperty(obj, key) {
  // your code here
  let newArr = []

  if (obj.hasOwnProperty(key) && Array.isArray(obj[key]) && obj[key].length !== 0) {
    newArr = obj[key].map(element => Math.pow(element, 2));
  }

  return newArr

}

let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]