let obj = {
    key: [4, 1, 8]
};

function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    let sum = 0;

    if (obj.hasOwnProperty(key) && Array.isArray(obj[key]) && obj[key].length !== 0) {
        obj[key].map(element => sum += element);
    }

    return sum;
}
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13