// strings in Js -> Non primitive DataTypes

let str = "learning with \'JavaScript\' ";
// console.log(str)
// console.log("length : "+str.length);
// console.log(str.indexOf('With'));
// console.log(str.lastIndexOf('t'));

let constructr = new String("Technical Tutorial");
// console.log(cons);


// searching of string in a string... search() used to search the substring and return its position.

let str2 = "ecmaScript modern tutorial";
// console.log(str2.search("modern")); // returns the position of moderm


// Extracting string parts....
// slice(start,end) substring(start,end) substr(start,length) -> original str will not changed

let fruits = "apple banana cherry guava banana";
// console.log(fruits.slice(0,9)); // end position - 1
// console.log(fruits.slice(2,-2)); // slice() also accepts negative number
// substring() is similar to slice() but doesnt take negative indexes
// console.log(fruits.substring(2,-2)); // here, (0,2) will be counted
// substr() is also similar to slice() but it takes length as the second parameter
// console.log(fruits.substr(0,5));
// console.log(fruits.substr(-5)); // take from backside

// replace() method -> return a new string & by default change only first match

let repl = fruits.replace("banana","kiwi");
// let repl_all = fruits.replaceAll("banana","kiwi"); // replaceAll will replace every matched Item
// console.log(repl);
// console.log(fruits);
// console.log(repl_all);

// Extracting string characters -> charCodeAt charAt property access
let string = "JavaScript with Thapa Technical";
// console.log(string[5]); // property access method in strings
// console.log(string.charAt(5)); // c
// console.log(string.charCodeAt(5)); // c - 99 as ASCII code of a - 97
let lastChar = string.length;
// console.log(string.charAt(lastChar-1));
// console.log(string.charCodeAt(lastChar-1));

// other string methods
// console.log(string.toUpperCase());
// console.log(string.toLowerCase());
// console.log(string.concat(" Programming ")); // template literals can also be used

let email = "                     jiyapahwa@gmail.com";
// console.log(email.trim()); // remove whitespaces from both front and back side of string.

// converting string to array

let str_fruits = "apple mango papaya pineapple";
// let str_to_array = str_fruits.split(',');
let str_to_array = str_fruits.split(' ');
console.log(str_to_array);
