//Print array character after 3sec
//Interval syntax :setInterval(function, milliseconds, param1, param2, ...)

let str = "Its a JavaScript Program".split("");

const interval = setInterval(() => {
  document.write(str[0]);
  str = str.slice(1);

  if (!str.length) {
    clearInterval(interval);
  }
}, 1000);

/*
const myTimer = setTimeout(function () {
  document.write(str[0]);
  str = str.slice(1);
  if (!str.length) {
    clearTimeout(myTimer);
  }
}, 1000);
*/
//setTimeout(function, milliseconds ) Executes a function, after waiting a specified number of milliseconds.
//setInterval(function, milliseconds) Same as setTimeout(), but repeats the execution of the function continuously.
