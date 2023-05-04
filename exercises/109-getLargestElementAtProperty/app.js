let obj = {
  key: [1, 2, 4]
};
function getLargestElementAtProperty(obj, key) {
    // your code here
    let largestElement = 0;

    if (obj.hasOwnProperty(key) && Array.isArray(obj[key]) && obj[key].length !== 0) {
      obj[key].forEach(element => {
        if (element > largestElement) {
          largestElement = element;
        }
  
      });
    } else return [];
  
    return largestElement;


    
}
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4