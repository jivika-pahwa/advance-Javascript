// brushing up JavaScript !! Part 1

function scope(){
  var a = "var type";
  if(true){
    let b = "let type";
    let c = "constant type";
    console.log(b);
    console.log(c);
    console.log(a);
  }
  // console.log(b);
  // console.log(c);
  console.log(a);
}


// scope();

var fname = "Jivika", lname = "Pahwa";
// console.log(` Template literal -- ${fname} ${lname}`);

function table(a,number = 5){
    console.log(` ${number} - ${a} `);
}
// table(1);

var display = (a) => {
  console.log("arrow function is here !! "+a);
}
// display(22);

var sum = (a,b) => a+b;

// console.log(sum(3,5));

var arr = ["red","blue","black","orange","yellow"];
arr.splice(arr.length,0,"grey"); // insert
arr.splice(arr.length-2,1,"Yellow"); // update
// console.log(arr);

arr.forEach((item, i) => {
    // console.log(item);
});

var arr2 = ["pen","pencils","eraser","sharpner"];
var arr3 = ["sketch","paper","sheets","glitter pens"];
var combine = [...arr,...arr2,...arr3]; // Spread Operator
// console.log(combine);

// push and unshift
arr2.push("colors");
console.log(arr2);
arr2.unshift("stencil");
console.log(arr2);

// pop and shift

arr2.pop();
console.log(arr2);
arr2.shift();
console.log(arr2);
