var path = require('path');
var filename = "Desktop//jivika//gauravii//gaurav.html";
console.log("normalize name -  "+path.normalize(filename));
console.log("directory name -  "+path.dirname(filename));
console.log("extension name  - "+path.extname(filename));
console.log("file name - "+path.basename(filename));
