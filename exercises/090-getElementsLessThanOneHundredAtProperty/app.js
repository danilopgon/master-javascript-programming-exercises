// Write your function here
const getElementsLessThan100AtProperty = (object, keyArray) => {
    arrayOfProperties = []

    if (object.hasOwnProperty(keyArray) && Array.isArray(object[keyArray])) {
        object[keyArray].forEach(element => {
            if (element < 100) {
                arrayOfProperties.push(element);
            }          
        });
    }


    return arrayOfProperties;
}

let obj = {
    key: [1000, 20, 50, 500]
  };
  let output = getElementsLessThan100AtProperty(obj, 'key');
  console.log(output); // --> [20, 50]
  