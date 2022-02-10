// ******** challenge Time *********

// map() function -> return a new array without changing the original array whereas, forEach change the original array
// forEach returns undefined.
// chain other methods with map like reduce() sort() but with forEach we can't.

const num = [1,4,8,5];
let new_array = num.map( (currentElement,index,array) => {
      return `index no. ${index} with element ${currentElement} belongs to [${array}] `;
})

console.log(num);
console.log(new_array);

let new_array_for = num.forEach( (currentElement,index,array) => {
      return `index no. ${index} with element ${currentElement} belongs to [${array}] `;
})

console.log(new_array_for);

// ******** challenge Time *********

let arr = [25,36,49,64,81];
let sqr_root = arr.map( (element,index) => {
        // return  ` square root : ${Math.sqrt(element)}`
        return  Math.sqrt(element);
});
// console.log(sqr_root);

let arr_2 = [2,3,4,6,8];
let multiply = arr_2.map( (element,index) => {
        return  element*2;
}).filter((elem)=>{
      return elem > 10;
}).reduce((acc,curr,index,array)=>{
      acc += curr;
      return acc; // return the sum of filtered elements
});
// console.log(multiply);

// reduce() to flaten an array into a singleDimensional array or 1D array to a single element.

let arr_3 = [2,4,6,8];
let reduce = arr_3.reduce((acc,curr,index,array)=>{
      acc += curr;
      return acc;
},78); // here 78 is an initial value which is added into accumulator and then further array addition is performed.
console.log(reduce);

let array = [['a','b'],['aa','bb'],['aaa','bbb']];
let flatenArray = array.reduce((acc,currentElement)=>{
      return acc.concat(currentElement);
});
console.log(flatenArray);

// ********* notes completed till here **********
