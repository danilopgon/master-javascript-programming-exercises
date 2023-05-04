function findShortestElement(arr) {
    // your code here
    let shortestElement = arr[0]


    if (arr.length !== 0) {
        arr.filter(element => element.length < shortestElement.length ? shortestElement = element : null)
    } else return ''


    return shortestElement;

}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'