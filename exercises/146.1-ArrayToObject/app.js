function transformFirstAndLast(array) {
  // your code here

  let firstElement = array.shift();
  let lastElement = array.pop();


  let firstAndLastObj = {};
  firstAndLastObj[firstElement] = lastElement;
   
  return firstAndLastObj;
}

let output = transformFirstAndLast(['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey'])
console.log(output); // { Kevin: "Spacey" }
