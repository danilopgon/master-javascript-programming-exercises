function fromListToObject(array) {
  // your code here
  const obj = Object.fromEntries(array);

  return obj;
}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output) // => { make: 'Ford', model: 'Mustang', year: 1964 }