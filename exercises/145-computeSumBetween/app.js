function computeSumBetween(num1, num2) {
    // Your code here
    let sum = 0;

    if (num1 < num2) {

        for (let i = num1; i < num2; i++) {
            sum += i;
        }

    } else return 0;

    return sum;

}

let output = computeSumBetween(2, 5);
console.log(output); // --> 9