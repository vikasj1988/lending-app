/* Square Star Pattern
 *****
 *****
 *****
 *****
 *****
 */

//let n = 5;
let rows = prompt("Enter number of rows");
let columns = prompt("Enter nnumber of columns");
let str = "";
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < columns; j++) {
    str += "*";
  }
  str += "\n";
}
console.log(str);
