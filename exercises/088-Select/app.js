// Write your function here
const select = (arr, obj) => {
    const newObj = {};
    arr.forEach(element => {
        if (obj.hasOwnProperty(element)) {
            newObj[element] = obj[element];
        }   

    });

    return newObj;

}


let arr = ['a', 'c', 'e'];
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
let output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }
