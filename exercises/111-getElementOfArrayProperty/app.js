let obj = {
    key: ['Jamil', 'Albrey']
};

function getElementOfArrayProperty(obj, key, index) {
    // your code here
    if (obj.hasOwnProperty(key) && Array.isArray(obj[key]) && obj[key].length !== 0) {
        return obj[key][index]
    } else return undefined;

}

let output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output); // --> 'Jamil'
