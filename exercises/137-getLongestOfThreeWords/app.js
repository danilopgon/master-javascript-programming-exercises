function getLongestOfThreeWords(word1, word2, word3) {
    // your code here
    const newArr = [word1, word2, word3];
    let longestWord = ''

    newArr.map(element => element.length > longestWord.length ? longestWord = element : null);

    return longestWord;
}

let output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'