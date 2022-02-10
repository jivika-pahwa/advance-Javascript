var http = require('http');
function Onserver(request,response) {
  response.writeHead(202,{"content-type":"text/plain"});
  response.write("i am your  server 8000 created by node js (jiboo)");
  response.end();
}
http.createServer(Onserver).listen(8000);
console.log('hey server 8000');
