let customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  let greeting = '';
  // your code here

  
if (customerData.hasOwnProperty(firstName)) {
  if (customerData[firstName].visits === 1) {
    greeting = `Welcome back, ${firstName}! We're glad you liked us the first time!`;
  } else if (customerData[firstName].visits > 1) {
    greeting = `Welcome back, ${firstName}! So glad to see you again!`;
  } 
} else return 'Welcome! Is this your first time?';

  
  return greeting;
}

let output = greetCustomer('Carrie');
console.log(output); // --> 'Welcome! Is this your first time?'
