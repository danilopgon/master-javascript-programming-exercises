function removeFromFrontOfNew(arr) {
    // your code here
    let newArr = arr.filter(element => element !== arr[0]);

    return newArr;
    
}