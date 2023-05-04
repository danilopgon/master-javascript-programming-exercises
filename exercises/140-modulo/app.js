function modulo(num1, num2) {
    // your code here

    const quotient = parseInt(num1 / num2);
    const product = quotient * num2;

    return num1 - product;



}

let output = modulo(25, 4);
console.log(output); // --> 1