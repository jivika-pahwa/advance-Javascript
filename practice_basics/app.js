//ques1
var obj = {
  name:'nonu',
  age:9
};
console.log(obj);
console.log("my name is : " +obj.name+ " and i am  : "+obj.age + " years old");
//ques2
function add() {
  // undefined function
};
console.log(add());
//ques3
 var jivika = function() {
   return 3+4;
 };
 console.log(jivika());
 //ques4
 var age = function() {
   console.log("i am 21 years old !")
 };
 setTimeout(age,2000);
 // setInterval(age,2000);
 //ques5
 var color = {
   jiboocolr : 'black',
   jaanucolr :'blue'
 };
 var gauravicolr = color;
 gauravicolr.jiboocolr = 'red';
  gauravicolr.jaanucolr = 'white';
 console.log("mummy color : " +color.jiboocolr + " papa color : " + color.jaanucolr);
//ques6
 var name = '22';
 var age = '21';
 console.log(name == age); //compare value
 console.log(name === age); //compare value and datatype also
 //ques7
 var flowers = {
   firstname :'jivika',
   lastname:'pahwa',
   fullname:function(){
     return this.firstname + " " + this.lastname;
     // this points to the whole object named flowers.
   }
 };
console.log(flowers.fullname());
//ques8
require('./practice_basics/a');
require('./practice_basics/b');
