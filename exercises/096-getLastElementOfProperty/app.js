// Write your function here
const getLastElementOfProperty = (object, arrayKey) => {
    if (object.hasOwnProperty(arrayKey) && Array.isArray(object[arrayKey]) && object[arrayKey].length !== 0) {
        const arr = object[arrayKey];
        return arr[arr.length - 1];
    }
}


let obj = {
    key: [1, 2, 5]
  };
  let output = getLastElementOfProperty(obj, 'key');
  console.log(output); // --> 5
  