function flipEveryNChars(string, n) {
    let result = '';

    for (let i = 0; i < string.length; i += n) {
        let chunk = string.slice(i, i + n);
        let flippedChunk = '';
        for (let j = chunk.length - 1; j >= 0; j--) {
            flippedChunk += chunk[j];
        }
        result += flippedChunk;
    }

    return result;
}

let input = 'a short example';
let output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma