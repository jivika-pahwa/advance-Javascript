function request(order) {
  console.log("preparing order",order);
  response( function(){
  console.log("order delivered",order);
  });
};

function response(reply){
  setTimeout(reply,5000);
}

request(1);
request(2);
request(3);
request(4);
request(5);
