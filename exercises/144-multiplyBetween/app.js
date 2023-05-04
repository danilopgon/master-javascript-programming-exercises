function multiplyBetween(num1, num2) {
    // Your code here
    let multiply = 1;

    if (num1 < num2) {
        for (let i = num1; i < num2; i++) {

            multiply *= i;
        }

    } else return 0;


    return multiply

}

let output = multiplyBetween(2, 5);
console.log(output); // --> 24