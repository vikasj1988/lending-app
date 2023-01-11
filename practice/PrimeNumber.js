//Program to check given number is prime number or not

// const number = parseInt(prompt("Enter Positive number"));
// let isPrime = true;

// if (number === 1) {
//   console.log("1 is neither prime nor composite number");
// } else if (number > 1) {
//   for (let i = 2; i < number; i++) {
//     if (number % i == 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log(`${number} is a prime number`);
//   } else {
//     console.log(`${number} is not a prime number`);
//   }
// } else {
//   console.log("The number is not a prime number");
// }

//************************************************************** */

//
//**************************************************************** */
// program to print prime numbers between the two numbers

// take input from the user
const lowerNumber = parseInt(prompt("Enter lower number: "));
const higherNumber = parseInt(prompt("Enter higher number: "));

console.log(
  `The prime numbers between ${lowerNumber} and ${higherNumber} are:`
);

// looping from lowerNumber to higherNumber
for (let i = lowerNumber; i <= higherNumber; i++) {
  let flag = 0;

  // looping through 2 to user input number
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      flag = 1;
      break;
    }
  }

  // if number greater than 1 and not divisible by other numbers
  if (i > 1 && flag == 0) {
    console.log(i);
  }
}
