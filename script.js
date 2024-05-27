let round = document.getElementById("round");
let Name = document.getElementById("ceil");
let city = document.getElementById("floor");
let add = document.getElementById("generate");
let dice = document.getElementById("dice");
let pass = document.getElementById("pass");
let string = document.getElementById("string");
let control = document.getElementById("length");
let Price = document.getElementById("Price");

let input = document.getElementById("input");
let output = document.getElementById("output");

let inp = document.getElementById("btnInput");
let out = document.getElementById("btnOutput");

let original = "25.12345";

document.getElementById("original-data").innerHTML = original;

round.onclick = function () {
  let word = input.value;
  if (!word) {
    alert("Please enter a Value");
    return;
  }

  word = Math.round(word);
  output.value = word;
};

Name.onclick = function () {
  let word = input.value;
  if (!word) {
    alert("Please enter a Value");
    return;
  }

  word = Math.ceil(word);
  output.value = word;
};

city.onclick = function () {
  let word = input.value;
  if (!word) {
    alert("Please enter a Value");
    return;
  }

  word = Math.floor(word);
  output.value = word;
};

add.onclick = function () {
  let word = Math.random();
  output.value = word;
};

dice.onclick = function () {
  let word = Math.random();
  word = Math.floor(word * 6) + 1;

  output.value = word + " " + "Is Your Dice Number.";
};

pass.onclick = function () {
  let uper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lower = "abcdefghijklmnopqrstuvwxyz";
  let num = "0123456789";
  let simble = "~!@#$%^&*+_-=|/?><.:";

  let Full = uper + lower + num + simble;
  let A = "";

  for (let i = 0; i < 12; i++) {
    let a = Math.random();
    A += Full.charAt(Math.floor(a * Full.length));
    output.value = A;
  }
};

string.onclick = function () {
  let word = input.value;
  if (!word) {
    alert("Please Enter a Number");
    return;
  }

  // console.log(word);
  // word = parseInt(word);
  // console.log(word);
  // word = parseFloat(word);
  let a = +prompt("Enter a Number ");
  word = Number(word);
  // console.log(word);

  let b = word + a;
  output.value = b;
};

control.onclick = function () {
  let word = input.value;
  if (!word) {
    alert("Enter a Number");
    return;
  }

  word = Number(word);
  word = word.toFixed(0);
  output.value = word;
};

Price.onclick = function () {
  let word = input.value;
  if (!word) {
    alert("Enter Your Price");
    return;
  }

  word = Number(word);
  let a = +prompt("Enter Your Tax");
  let b = (word * a) / 100;
  let c = word + b;

  output.value =
    word +
    " " +
    " Your Price" +
    " " +
    b +
    " " +
    " Your Tax " +
    " " +
    c +
    " " +
    "  Your Total Price";
};
// round.onclick = function () {
//   let a = input.value;
//   if (!a) {
//     alert("Please Enter A Float Number For Round");
//     return;
//   }
//   a = Math.round(a);
//   output.value = a;
// };

// ceil.onclick = function () {
//   let a = input.value;
//   if (!a) {
//     alert("Please Enter A Float Number For Ceil");
//     return;
//   }
//   a = Math.ceil(a);
//   output.value = a;
// };

// city.onclick = function () {
//   let a = input.value;
//   if (!a) {
//     alert("Please Enter A Float Number For Ceil");
//     return;
//   }
//   a = Math.floor(a);
//   output.value = a;
// };

// generate.onclick = function () {
//   let a = Math.random();
//   output.value = a;
// };

// dice.onclick = function () {
//   let a = Math.random();
//   a = Math.round(a * 6);
//   a = Math.floor(a);
//   output.value = a;
// };

// pass.onclick = function () {
//   let b = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   let c = "abcdefghijklmnopqrstuvwxyz";
//   let d = "0123456789";
//   let e = "!@#$%&_-`~<,>.?/^=+";
//   let Full = b + c + d + e;
//   let a = "";

//   for (let i = 0; i < 16; i++) {
//     let num = Math.random();
//     a += Full.charAt(Math.floor(num * Full.length));
//     output.value = a;
//   }
// };

// string.onclick = function () {
//   let a = original;
//   a = Number(a);
//   output.value = a + " " + " Its Convert Into Number";
// };

// length.onclick = function () {
//   let a = original;
//   b = Number(a);
//   c = b.toFied(2);
//   c = Number(c);
//   output.value = a;
// };

// calculate.onclick = function () {
//   let a = input.value;
//   if (!a) {
//     alert("Please Type Something to Calculate !!");
//     return;
//   }
//   a = Number(a);
//   let tax = +prompt("Please Enter Your Tax");

//   let Tax = a * (tax / 100);
//   let Total = a + Tax;
//   Total = Math.round(Total);
//   output.value = Total;
// };
inp.onclick = function () {
  input.value = "";
};

out.onclick = function () {
  output.value = "";
};
