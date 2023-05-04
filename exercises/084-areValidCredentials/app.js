// Write your function here
const areValidCredentials = (user, password) => {
    if (user.length > 3 && password.length >= 8) {
        return true;
    } else return false;

}

let output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> true
