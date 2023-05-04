let obj = {
  key: [1, 2, 3]
};
function getAllButLastElementOfProperty(obj, key) {
  // your code here
  if (obj.hasOwnProperty(key) && Array.isArray(obj[key]) && obj[key].length !== 0) {
    obj[key].pop();
    return obj[key];
  } else return [];


}

let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]