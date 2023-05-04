function transformEmployeeData(array) {
  // your code here
  let auxArr = []
  let obj = {};

  array.map(employeeData => {
    obj = Object.fromEntries(employeeData);
    auxArr.push(obj);
  });

  return auxArr;

}

let output = transformEmployeeData([[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']], [['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]);
console.log(output); // [{firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'}, {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}]
