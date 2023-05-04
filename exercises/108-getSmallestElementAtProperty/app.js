let obj = {
  key: [2, 1, 5]
};
function getSmallestElementAtProperty(obj, key) {
  // your code here
  
  let smallestElement = 99999999999999999;

  if (obj.hasOwnProperty(key) && Array.isArray(obj[key]) && obj[key].length !== 0) {
    obj[key].forEach(element => {
      if (element < smallestElement) {
        smallestElement = element;
      }

    });
  } else return [];

  return smallestElement;

}
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1