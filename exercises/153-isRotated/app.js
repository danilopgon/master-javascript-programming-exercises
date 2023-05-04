function isRotated(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let concatenated = str1 + str1;

  if (concatenated.includes(str2)) {
    return true;
  } else {
    return false;
  }
}
console.log(isRotated('hello world', 'orldhello w')); // => true
console.log(isRotated('hello world', 'omrel wp')); // => false

