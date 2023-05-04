// Write your function here
const findMinLengthOfThreeWords = (word1, word2, word3) => {
    const arrayOfWords = [word1, word2, word3]
    let shortestWord = word3.length;

    arrayOfWords.forEach(element => {
        if (element.length < shortestWord) {
            shortestWord = element.length;
        }
        
    });

    return shortestWord;
}

let output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1
