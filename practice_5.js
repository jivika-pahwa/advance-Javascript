const a = ['apple','banana','chicku','donut','litchi','kiwi'];

for (var i in a){
  console.log(i);
}

for (var i of a){
  if(i == 'kiwi'){
    console.log(a.indexOf(i));
  }
  else{
    console.log("element not found !!");
  }
}

// Anonymous function expression..

let sum = (a,b) => {
  return a+b;
}

console.log("sum of two numbers : " +sum(2,5));
