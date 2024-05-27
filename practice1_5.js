// brushing up JavaScript !! Part 5

let number = "8374892749";
let phone = "num";

console.log(isNaN(number)); // false
console.log(isNaN(phone)); // true

function check(){
  if(isNaN(number)){
    console.log("kindly enter a number");
  }
  else{
    console.log("entered a correct format");
  }
}
check();

// practice question

console.log(NaN === NaN); // NaN of what will be always false.
console.log(Number.NaN === Number.NaN); // same as NaN === NaN cuz Number.NaN is NaN only
console.log(isNaN(NaN)); // true
console.log(isNaN(Number.NaN)); // true
console.log(Number.isNaN(NaN)); // true

let name = "jivika";
console.log(name.concat(" pahwa"));

console.log(12+"34"); // string concatenation
console.log("72"-"34"); // JS bug with (-) operator

let anonymous = () => {
  console.log("this is Anonymous function");
};
anonymous();

// ***************** Practice Ends *******************
