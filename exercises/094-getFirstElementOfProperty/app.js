// Write your function here
const getFirstElementOfProperty = (object, arrayKey) => {
    if (object.hasOwnProperty(arrayKey) && Array.isArray(object[arrayKey])) {
        const [firstIndex, ...rest] = object[arrayKey];
        return firstIndex;
    }
}


let obj = {
    key: [1, 2, 4]
};
let output = getFirstElementOfProperty(obj, 'key');
console.log(output); // --> 1
