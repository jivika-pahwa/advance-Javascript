// High Order function

let sub = (a,b) => {
  return a-b;
}

let add = (a,b) => {
  return a+b;
}

// high order function -> passing a function (operator) as an arguement is called HOF.
let calculator = (a,b,operator) => {
  return operator(a,b);
}

console.log(calculator(12,8,sub));
console.log(calculator(12,8,add));

// function currying
function sum(num1){
  return function(num2){
    return function(num3){
          return (num1+num2+num3);
    }
  }
}
console.log(sum(2)(4)(6));

// async await
// async keyword before function means to always return a promise.
const obj = new Promise(function(resolve,reject){ //
          let names = ['a','b','c','d'];
          resolve(names);
          reject("rejection while getting data");
});

async function getData(){
    const data = await obj;
    console.log(data);
}

getData();
