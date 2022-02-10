// OOPS in JS

// Object Literals

let employee = {
  name:"jivika",
  age:23,
  getData:()=>{
    console.log(`my name is ${employee.name} and age is ${employee.age}`)
  },
  other:{
    name:"CDAC",
  }
}
console.log(employee.other.name);
employee.getData();

// this keyword

let this_obj = {
  name:"Jivika Pahwa",
  getData() {
    console.log(this);
  }
}
this_obj.getData(); // this will not work with arrow function

// array destructuring

let fruits = ['apple','mango','cherry'];
let [fruit_1,fruit_2] = fruits;
console.log(fruit_1 + fruit_2);

// object destructuring

let myObject = {
  name:"jiivika",
  age:23,
}
let {name,age} = myObject;
console.log(name + age);

// Dynamic properties

let my_name="myName";
let myObject_2 = {
  [my_name]:"jiivika",
  age:23,
}
console.log(myObject_2);

// when both key and value is same

let empName = "ABCD"
let empAge = 23
let emp = {empName,empAge}
console.log(emp);

// Object.values() and Object.entries()

let person = {name:'fred',age:56};
console.log(Object.values(person));
let obj_to_array = Object.entries(person);
let array_to_obj = JSON.stringify(Object.assign({},obj_to_array));
console.log(obj_to_array);
console.log(array_to_obj);
