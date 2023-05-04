let obj = {
  key: [1, 2, 3, 4]
};

function getProductOfAllElementsAtProperty(obj, key) {
  // your code here

  let product = 1;


  if (Array.isArray(obj[key]) && obj.hasOwnProperty(key) && obj[key].length !== 0) {
    obj[key].map(element => product *= element);
  } else return 0;

  return product;

}
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24