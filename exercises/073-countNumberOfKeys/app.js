let obj = {
    person:"Rafael",
    lastName:"Leao",
    country: "Italy",
    city: "Milan",
    phoneNum: "123-456-789",
    jerseyNum: 27,
}

function countNumberOfKeys(obj) {
    // your code here
    let counter = 0;

    for (let property in obj) {
        counter += 1;
    }
    
    return counter;
}
console.log(countNumberOfKeys(obj))
