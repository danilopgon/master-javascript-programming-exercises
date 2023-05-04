function getLengthOfShortestElement(arr) {
    // your code here
    let shortestLength = 99999999999


    if (arr.length !== 0) {
        arr.forEach(element => element.length < shortestLength ? shortestLength = element.length : null);
    } else return 0;


    return shortestLength;


}
let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3