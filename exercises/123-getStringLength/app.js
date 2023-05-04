function getStringLength(string) {
    // your code here
    counter = 0;

    for (let i = 0; i < string.length; i++) {
        counter ++
    }

    return counter;

}

let output = getStringLength('hello');
console.log(output); // --> 5