// Write your function here
const keep = (arr, keeper) => {
    return arr.filter(element => element === keeper);
}


let output = keep([1, 2, 3, 2, 1], 2)
console.log(output); // --> [2, 2]
