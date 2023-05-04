// Write your function here
const countAllCharacters = (string) => {
    const letterCounter = {};
    
    for (let i = 0; i < string.length; i++) {
        if (letterCounter.hasOwnProperty(string[i])) {
            letterCounter[string[i]] += 1;
        } else {
            letterCounter[string[i]] = 1;
        }
    }

    return letterCounter;
}

let output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}
