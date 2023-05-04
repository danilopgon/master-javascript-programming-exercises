// Write your function here !
const computeAverageOfNumbers = (array) => {
    let sum = 0;

   if (array.length !== 0) {
    array.forEach(element => {
        sum += element;
    });
   } else return sum;

    const average = sum / array.length;
    return average;
}


let input = [1, 2, 3, 4, 5];
let output = computeAverageOfNumbers(input);
console.log(output); // --> 3
