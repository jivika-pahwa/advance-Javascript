// Expression and Operators
// Expression = combination of operands and Operators

console.log(5+20);

let num = 145;

console.log( ( num > 50 ? 'true' : 'false') ); // ternary Operator

let num_2 = (1>=2); // // relational Operator
console.log(num_2);
console.log(num_2=90); // assignment Operator

let a = 89, b = 487;
function greatest(){
  if(a>b){
    return a;
  }
  else{
    return b;
  }
}
console.log(` Is both the number are equal or not ?  ${a==b} `); // template literal
console.log(` which of them is greatest ?  ${greatest()} `);

console.log((!56)); // not operator

// string Operators...

let str1 = "maths "
let str2 = "english"
console.log(str1+str2); // concatenation

// Challenge Time

console.log(3**4);
console.log(12+"34");

function swap(){
  let a = 2 , b = 4, c;
  console.log(`Before swapping : a = ${a} and b = ${b}`);
  c = a; // c = 2
  a = b; // a = 4
  b = c; // b = 2;
  console.log(`after swapping : a = ${a} and b = ${b}`);
}

function swap_2(){
  let a = 2 , b = 4, c;
  console.log(`Before swapping : a = ${a} and b = ${b}`);
  a = a+b; // 6;
  b = a-b; // 2;
  a = a-b; // 4
  console.log(`after swapping : a = ${a} and b = ${b}`);
}

swap();
swap_2()
