// Write your function here
const getAverageOfElementsAtProperty = (object, key) => {
    let sum = 0;
    let average = 0;

    if (object.hasOwnProperty(key) && Array.isArray(object[key]) && object[key].length !== 0) {
        object[key].forEach(element => {
            sum += element;
        });

        average = sum / object[key].length;
    }


    return average;


}

let obj = {
    key: [1, 2, 3]
};
let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2