// Date and Time in JavaScript

const currDate = new Date();
console.log(new Date());
console.log(new Date().toLocaleString());
// console.log(new Date("22 october 2021").toLocaleString());
console.log(new Date().toString());
// console.log(Date.now()); // return miliseconds from 1st jan 1970 till now.
// console.log(currDate.getFullYear());
// console.log(currDate.getMonth()); // 0-11 Jan to Dec
// console.log(currDate.getDate());
// console.log(currDate.getDay()); // 0-6 sun to sat

// console.log(currDate.getTime()); // retun miliseconds
// console.log(currDate.getHours()); // retun miliseconds
// console.log(currDate.getMinutes()); // retun miliseconds
// console.log(currDate.getSeconds()); // retun miliseconds
// console.log(currDate.getMilliseconds()); // retun milliseconds

console.log(currDate.toLocaleTimeString()); // retun time
console.log(currDate.toLocaleDateString()); // retun date
console.log(currDate.toLocaleString()); // retun time and date both
