//Palindrome series
const checkPalindrome = (input) => {
  //function checkPalindrome(string) {
  const len = input.length; // find the length of a string
  // loop through half of the string
  for (let i = 0; i < len / 2; i++) {
    // check if first and last string are same
    if (input[i] !== input[len - 1 - i]) {
      //return "It is not a palindrome";
      return `${input} not a palindrome`;
    }
  }
  return `${input} is a palindrome`;
};
const input = prompt("Enter a string: "); // take input
const value = checkPalindrome(input); // call the function
console.log(value);
