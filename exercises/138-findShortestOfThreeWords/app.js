function findShortestOfThreeWords(word1, word2, word3) {
    // your code here
    const newArr = [word1, word2, word3];
    let shortestWord = newArr[0];

    newArr.map(element => element.length < shortestWord.length ? shortestWord = element : null);

    return shortestWord;
}
let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'