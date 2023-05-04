function findSmallestElement(arr) {
    // your code here
    let smallestElement = 999999999999;

    if (arr.length !== 0) {

        arr.filter(element => element < smallestElement ? smallestElement = element : null);

    } else return 0;

    return smallestElement;

}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1