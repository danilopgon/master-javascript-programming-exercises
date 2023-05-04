function isOddWithoutModulo(num) {
    // your code here
    num = Math.abs(num);
    let isOdd = false;

    for (let i = 1; i <= num; i++)
        isOdd = !isOdd;

    return isOdd;
}
let output = isOddWithoutModulo(17);
console.log(output); // --> true