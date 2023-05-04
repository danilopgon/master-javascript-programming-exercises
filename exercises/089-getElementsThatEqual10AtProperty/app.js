// Write your function here
const getElementsThatEqual10AtProperty = (object, keyArray) => {
    arrayOfProperties = []

    if (object.hasOwnProperty(keyArray) && Array.isArray(object[keyArray])) {
        object[keyArray].forEach(element => {
            if (element === 10) {
                arrayOfProperties.push(element);
            }          
        });
    }


    return arrayOfProperties;
}

let obj = {
    key: [1000, 10, 50, 10]
  };
  let output = getElementsThatEqual10AtProperty(obj, 'key');
  console.log(output); // --> [10, 10]
  