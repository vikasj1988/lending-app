//Reverse the string

const reverse = (input) => {
  let newstr = "";
  for (let i = input.length - 1; i >= 0; i--) {
    newstr += input[i];
  }
  return newstr;
};
const input = prompt("Enter a string");
const result = reverse(input);
console.log(result);
