// brushing up JavaScript !! Part 2

let arr = [25,36,4,15,81,49];
// console.log(arr);

let sqr = arr.findIndex((ele,index)=>{
      return ele == 4; // return the element value else, return undefined.
});
// console.log(sqr);

let str = "hello world";
let searchstring = str.search("wor"); // return index of the string.
// console.log(searchstring);

let split = str.split('');
console.log(split);
let reverse_array = split.reverse();
console.log(reverse_array);
let join = reverse_array.join('');
console.log(join);
let join_reverse = join.split(' ').reverse().toString();
console.log(join_reverse);
