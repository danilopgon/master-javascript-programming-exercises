function flipPairs(string) {
    let result = '';
    for (let i = 0; i < string.length; i += 2) {
      if (i === string.length - 1) {
        result += string[i];
      } else {
        result += string[i + 1] + string[i];
      }
    }
    return result;
  }
  

let input = 'check out how interesting this problem is, it\'s insanely interesting!';
let output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
