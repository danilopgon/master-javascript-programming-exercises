// Write your function here
const getNthElementOfProperty = (object, arrayKey, index) => {
    if (object.hasOwnProperty(arrayKey) && Array.isArray(object[arrayKey]) && object[arrayKey].length !== 0 && index <= object[arrayKey].length) {
        const arr = object[arrayKey];
        return arr[index];
    }
}

let obj = {
    key: [1, 2, 6]
  };
  let output = getNthElementOfProperty(obj, 'key', 1);
  console.log(output); // --> 2
  