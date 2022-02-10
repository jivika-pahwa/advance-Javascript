// console.log("enter a number : ");
const number = 99999;
const phone = "number";

// console.log(number);
// console.log(isNaN(number));
// console.log(isNaN(phone));


function check(){
  if(isNaN(number)){
    // console.log("its not a number..kindly enter a correct phone number ");
  }
  else{
      // console.log("its a number");
  }
}

check();

// practice question

console.log(NaN === NaN); // NaN of what will be always false.
console.log(Number.NaN === Number.NaN); // same as NaN === NaN cuz Number.NaN is NaN only
console.log(isNaN(NaN)); // true
console.log(isNaN(Number.NaN)); // true
console.log(Number.isNaN(NaN)); // true
