function average(array_of_numbers) {
  // process array of numbers
  const suma = sum(array_of_numbers);

  return suma/array_of_numbers.length;

}

function sum(numbers) {
  let sum = 0;
  numbers.map(element => sum += element);
  return sum;
}