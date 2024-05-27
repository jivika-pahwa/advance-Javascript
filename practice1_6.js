// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");

const obj = {
    name : "jivika",
    getName : () => {console.log("hey - "+ this);},
    getPrintObject : () => {console.log(this);}
};
obj.getName();
obj.getPrintObject();



/*
--- output ---

hey - [object Object]
{}

*/
