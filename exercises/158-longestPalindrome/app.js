function findLongestPalindrome(sentence) {
  let palindromoMasLargo = '';
  for (let i = 0; i < sentence.length; i++) {
    let palabra = '';
    for (let j = i; j < sentence.length; j++) {
      palabra += sentence[j];
      if (isPalindrome(palabra) && palabra.length > palindromoMasLargo.length) palindromoMasLargo = palabra
    }
  }
  return palindromoMasLargo;
}
function reverseString(string) {
  return string.split('').reverse().join('');
}
function isPalindrome(word) {
  // hint: you can detect palindromes by comparing a string to its reverse
  if (word.toLowerCase() === reverseString(word).toLowerCase()) {
    return true;
  } else return false;
}
let output = findLongestPalindrome("My dad is a racecar athlete");
console.log(output); // "a racecar a"