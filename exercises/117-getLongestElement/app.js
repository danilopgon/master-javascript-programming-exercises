function getLongestElement(arr) {
    // your code here
    let longest = ''


    if (arr.length !== 0) {
        arr.forEach(element => element.length > longest.length ? longest = element : null);
    } 


    return longest;


}
let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'