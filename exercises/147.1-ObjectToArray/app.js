function getAllKeys(obj) {
  // your code here
  let auxArr = [];

  for (let key in obj) {
    auxArr.push(key);
  }

  return auxArr;
}

let output = getAllKeys({name: "Sam", age: 25, hasPets: true});
console.log(output); // ['name', 'age', 'hasPets']
