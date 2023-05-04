// Write your function here
const getOddLengthWordsAtProperty = (obj, arrKey) => {
    let newArr = [];
    if (obj.hasOwnProperty(arrKey) && Array.isArray(obj[arrKey]) && obj[arrKey].length !== 0) {
       newArr = obj[arrKey].filter(element => element.length % 2 !== 0);
    }
    return newArr;
}


let obj = {
    key: ['It', 'has', 'some', 'words']
};
let output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words'