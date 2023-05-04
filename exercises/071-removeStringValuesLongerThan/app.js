function removeStringValuesLongerThan(num, obj) {
  // your code here
  for (let property in obj) {
    if (typeof obj[property] === 'string' && obj[property].length > num) {
      delete obj[property];
    }

  }
}

let obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas',
};
removeStringValuesLongerThan(6, obj);
