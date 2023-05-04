function getLengthOfLongestElement(arr) {
    // Your code here
    longestLength = 0;

    if (arr.length !== 0) {
        arr.forEach(element => {
            if (element.length > longestLength) {
                longestLength = element.length;
            }

        });
    }

    return longestLength;
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5