let obj = {
  key: ['a', 'long', 'game']
};
function getEvenLengthWordsAtProperty(obj, key) {
  // your code here
  let newArr = [];
  if (obj.hasOwnProperty(key) && Array.isArray(obj[key]) && obj[key].length !== 0) {
    newArr = obj[key].filter(element => element.length % 2 === 0)
  }

  return newArr;
}

let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']