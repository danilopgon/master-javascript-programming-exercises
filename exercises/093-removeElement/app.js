// Write your function here
const removeElement = (array, discarder) => {
    return array.filter(element =>  element !== discarder)

    
}

let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]
