function findShortestWordAmongMixedElements(arr) {
    // your code here
    let shortestWord = ''


    if (arr.length !== 0 && arr.some(element => typeof element === 'string')) {
        arr.map(element => {
            if (typeof element === "string") {
                if (shortestWord === '' || element.length < shortestWord) {
                    shortestWord = element;
                }
            }

        })
    }

    return shortestWord;
}
let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'