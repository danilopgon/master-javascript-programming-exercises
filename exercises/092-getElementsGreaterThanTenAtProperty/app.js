// Write your function here
const getElementsGreaterThan10AtProperty = (object, arrayKey) => {
    newArray = [];

    if (object.hasOwnProperty(arrayKey) && Array.isArray(object[arrayKey]) && object[arrayKey].length !== 0) {
        object[arrayKey].forEach(element => {
            if (element > 10) {
                newArray.push(element);
            }
        });
    }

    return newArray;
}

let obj = {
    key: [1, 20, 30]
};
let output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]
