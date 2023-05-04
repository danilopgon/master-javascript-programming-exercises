function addFullNameProperty(obj) {
  // Add your code after this line
  let newObject = obj
  newObject.fullName = `${obj.firstName} ${obj.lastName}`

  return newObject
}


let person = {
  firstName: 'Jade',
  lastName: 'Smith'
};
addFullNameProperty(person);
console.log(person.fullName); // --> 'Jade Smith'
