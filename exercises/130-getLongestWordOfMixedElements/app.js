function getLongestWordOfMixedElements(arr) {
    // your code here
    let longestWord = ''


    if (arr.length !== 0 && arr.some(element => typeof element === 'string')) {
        arr.map(element => {
            if (typeof element === "string") {
                if (longestWord === '' || element.length > longestWord) {
                    longestWord = element;
                }
            }

        })
    }

    return longestWord;
}


let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'