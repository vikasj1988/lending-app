function checkPalindrome(string) {
  const len = string.length; // find the length of a string
  // loop through half of the string
  for (let i = 0; i < len / 2; i++) {
    // check if first and last string are same
    if (string[i] !== string[len - 1 - i]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
}
const string = prompt("Enter a string: "); // take input
const value = checkPalindrome(string); // call the function
console.log(value);
