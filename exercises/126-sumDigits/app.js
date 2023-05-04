function sumDigits(num) {
    // your code here
    let sum = 0;
    let numberToString = num.toString().split('');

    for (let i = 0; i < numberToString.length; i++) {

        if (numberToString[i] === '-') {
            i++;
            let parsedNumber = parseInt(numberToString[i]); 
            sum -= parsedNumber; 
            continue;
        }

        let parsedNumber = parseInt(numberToString[i]);
        sum += parsedNumber;
    }

    return sum;
}


let output = sumDigits(-316);
console.log(output); // --> 4