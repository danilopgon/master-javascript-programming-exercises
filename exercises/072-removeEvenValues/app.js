function removeEvenValues(obj) {
    // your code here
    for (let property in obj) {
        if (obj[property] % 2 === 0) {
            delete obj[property];
        }
    }
    
}