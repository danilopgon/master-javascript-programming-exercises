function detectOutlierValue(string) {
    // Split the input string into an array of numbers
    const numbers = string.split(' ').map(Number);


    let evenCount = 0;
    let oddCount = 0;
    let lastEvenIndex = -1;
    let lastOddIndex = -1;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenCount++;
            lastEvenIndex = i;
        } else {
            oddCount++;
            lastOddIndex = i;
        }
    }


    if (evenCount > 1 && oddCount === 1) {
        return lastOddIndex + 1;
    } else if (oddCount > 1 && evenCount === 1) {
        return lastEvenIndex + 1;
    }

}


// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // => 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  //=> 2