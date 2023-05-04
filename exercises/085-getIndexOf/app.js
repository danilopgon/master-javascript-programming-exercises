// Write your function here
const getIndexOf = (char, string) => {

    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            return i;
        } if (i === string.length - 1) {
            return -1
        } else continue;
    }

}

let output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2

