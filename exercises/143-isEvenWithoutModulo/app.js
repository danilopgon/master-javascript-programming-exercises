function isEvenWithoutModulo(num) {
    // your code here
    num = Math.abs(num);
    let isEven = true;

    for (let i = 1; i <= num; i++)
        isEven = !isEven;

    return isEven;
}
let output = isEvenWithoutModulo(8);
console.log(output); // --> true