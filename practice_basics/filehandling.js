var fs = require('fs');
fs.writeFileSync("a.txt","welcome to nodejs - file handling");
console.log(fs.readFileSync('a.txt').toString());
