var http = require('http');
var fs = require('fs');

function OnError404(response) {
  response.writeHead(202,{"content-type":"text/plain"});
  response.write("there is an error");
  response.end();
}
function Onserver(request,response) {
  if(request.method == "GET" && request.url == "/") {
    response.writeHead(202,{"content-type":"text/html"});
    fs.createReadStream("./jivika.html").pipe(response);

  }
  else {
    OnError404(response);
  }
}
http.createServer(Onserver).listen(8001);
console.log('hey server 8001');
