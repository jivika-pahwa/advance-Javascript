// Modern Js or ECMA Script

// 1. var let and const
// var - functional scope
// let and const - block scope
// const can't be modified once declared.

function scope(){
  var first = "jivika"; // function scope
  if(true){
    let second = "pahwa"; // block scope
    const third = "nonuu"; // block scope
    // console.log(first);
    // console.log(second);
    // console.log(third);
  }
    // console.log(first);
    // console.log(second); // give error
}
    // console.log(first); // give error
scope();

// 2. Template literal

function table_8(){
  for(let i = 1 ; i <=10 ; i++)
  console.log(` 8 * ${i} = ${8*i} `);
}

// table_8();

// 3. Default Parameters

function table_8_default(table = 10){
  for(let i = 1 ; i <=10 ; i++)
  console.log(` ${table} * ${i} = ${table*i} `);
}

// table_8_default();

function mult(a,b="5"){
  return a*b;
}
// console.log(mult(5));

// 4. Arrow Functions -> in this we can't use this keyword.

const print = () => {
  console.log("this is a Fat Arrow function");
}
print();

const sum = (a,b) => {
  return a+b;
}
console.log(sum(2,3));

const multiply = (a,b) =>  a*b; // for single line code Arrow func
console.log(multiply(2,3));
