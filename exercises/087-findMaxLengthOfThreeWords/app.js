

// Write your function here
const findMaxLengthOfThreeWords = (word1, word2, word3) => {
    const arrayOfWords = [word1, word2, word3]
    let longestWord = word3.length;

    arrayOfWords.forEach(element => {
        if (element.length > longestWord) {
            longestWord = element.length;
        }
        
    });

    return longestWord;
}


