//Print array character after 3sec
//Interval syntax :setInterval(function, milliseconds, param1, param2, ...)

//let str = "Its a JavaScript Program".split("");

const myTimer = setTimeout(function () {
  let arr = ["a", "b", "c", "d", "e"];
  for (let i = 0; i < arr.length; i++) {
    (function (i) {
      setTimeout(() => {
        console.log(arr[i]);
      }, i * 1000);
    })(i);
  }
}, 3000);

//setTimeout(function, milliseconds ) Executes a function, after waiting a specified number of milliseconds.
//setInterval(function, milliseconds) Same as setTimeout(), but repeats the execution of the function continuously.
