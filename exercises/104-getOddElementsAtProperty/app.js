let obj = {
  key: [1, 2, 3, 4, 5]
};

function getOddElementsAtProperty(obj, key) {
    // your code here
    let newArr = [];

    if (obj.hasOwnProperty(key) && Array.isArray(obj[key]) && obj[key].length !== 0) {
      newArr = obj[key].filter(element => element % 2 !== 0);
    }

  return newArr;

}

let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]