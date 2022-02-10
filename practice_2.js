// Datatypes in JS

let a ;
let b = true;
let c = 12;
let d = "string";
let e = {
  name:'jivika',
  age : 22,
}
let f = [1,2,3,4];

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));
console.log(typeof(f));

var num = 9 - "50"; // Bug in JS
console.log(num);
console.log("jivika" - "pahwa"); // NaN
console.log(true + true); // 1 + 1

// null vs undefined

var name = null;
console.log(name) // null;
console.log(typeof(name));// object


var age ;
console.log(age); // undefined
console.log(typeof(age)); // undefined
