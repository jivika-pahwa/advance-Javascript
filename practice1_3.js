// brushing up JavaScript !! Part 3

let person = {name:'fred',age:56};
console.log(Object.values(person));

let obj_to_array = Object.entries(person);
let array_to_obj = JSON.stringify(Object.assign({},obj_to_array));

console.log(obj_to_array);
console.log(array_to_obj);

function sum(a){ // function currying -> return another function specially
  // when we want multiple arguements which further arrange into single arguement function
  return function(b){
    return function(c){
      return a+b+c;
    }
  }
};

console.log(sum(2)(3)(5));
