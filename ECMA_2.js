// Arrays in Js
// in Array : first element is known as lowerIndex/lowerBoundary ,
// last element is known as upperIndex/upperBoundary.


let fruits = ['apple','banana','cherry','donut','mango',22];
for(let i of fruits){
  // console.log(i);
}
let vegies = ['potato','tomato','onion','garlic','capsicum','tomato'];

// spread Operator in array

let combine = [...fruits,...vegies];

for(let i of combine){
  // console.log(i);
}

// Array - operations (traversal,CRUD,search,filter,compare,map,reduce,filter);

let length_of_vegies = vegies.length;
// console.log(`length of array : ${length_of_vegies}`);
// console.log(`the last element of array is : ${vegies[length_of_vegies-1]}`);

//for in loop.. (give indexing)

for(let i in vegies){
  // console.log(vegies[i]);
  if(vegies[i] == "tomato"){
    // console.log(` index position of tomato is : ${i}`);
  }
}

//for of loop.. (give elements)

for(let i of vegies){
  if(i == "capsicum"){
    // console.log(` position of tomato is : ${vegies.indexOf(i)+1}`);
  }
}

// forEach loop

vegies.forEach( (elem,i,array) => {
  // console.log(` ${elem} at ${i}th index of array [${array}]`);
});

// searching of element from array

// console.log(vegies.indexOf("tomato"));
// console.log(vegies.lastIndexOf("tomato"));
// console.log(vegies.includes("tomato"));

// find method -> only return one value , if not found return undefined
const prices = [200,300,400,500,600];

const findElem = prices.find( (ele,index,array) => {
      return ele > 400;
});

// console.log(findElem);


// findIndex method -> only return one index , if not found return -1
const prices_index = [200,300,400,500,600];

const findIndex = prices_index.findIndex( (ele,index,array) => {
      return ele > 800;
});

// console.log(findIndex);

// filter method -> returns a new array containing all elements of the calling array
// return all the matched data as well its index, if not return an empty array

const filter_data = prices_index.filter( (ele,index) => {
      return ele < 500;
});

// console.log(filter_data); // return a new array with matched condition


// sort and compare an Array

// sort() -> sort in ascending order. (mainly used with strings for sorting alphabetically )
// reverse() -> sort in descending order.

let names = ['jivika','nonu','ashish','harsh','gourav'];
// console.log(names.sort())
// console.log(names.reverse())

// compare two Arrays

let array1 = [1,2,3,4];
let array2 = [1,2,3,4];

// console.log(array1 == array2);
// console.log(JSON.stringify(array1) == JSON.stringify(array2)); // simplest way to compare the array

// CRUD in array

// push() adds one or more element into the end of the array and returns the new length of the array.

let num = [2,4,6,8];
num.push(8,9,10);
// console.log(num);
num.unshift(0,1); // adds in starting
// console.log(num);


// pop() deletes one element from the end of the array and returns the new length of the array.

num.pop();
// console.log(num);
// num.shift(); // remove from starting
// console.log(num);


// *****************************************

// CRUD operation in array using one method => 'splice(index,deleteCount,"new element to be inserted")'

let animals = ['goat','cow','bear','bull','monkey'];
let insert = animals.splice(2,0,"donkey")
// console.log(animals);
// console.log(insert);  // splice returns an empty array

animals.splice(4,1); // deletes an element
// console.log(animals);

animals.splice(4,1,"Monkey"); // updates an element
// console.log(animals);

//****** challenge Time *************

let months = ['Jan','Feb','march','April','June'];

let new_month = months.splice(months.length,0,"Dec"); // inserting Dec at the end
// console.log(months);
// console.log(new_month); // splice returns an empty array cuz the delete count is 0 here.

let indexofMonth = months.indexOf('march');
// console.log(indexofMonth);
  if(indexofMonth != -1){
      months.splice(indexofMonth,'1','March'); // dynamic searching and updating march as March
      // console.log(months);
  }
  else{
    console.log("element not found ! ");
  }


let new_month3 = months.splice(3,'1'); // deleting april from array
// console.log(new_month3); // slice returns a deleted element of the array -> April
// console.log(months);


// deleting all the elements from March

let indexofMonth_2 = months.indexOf('March');
// console.log(indexofMonth);
  if(indexofMonth_2 != -1){
      let deleted_array = months.splice(indexofMonth,Infinity); // deleting all the elements from March
      // console.log(months);
      // console.log(`deleted elements : ${deleted_array}`);
  }
  else{
    console.log("element not found ! ");
  }
