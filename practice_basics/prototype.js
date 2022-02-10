function person(name) {
  this.name = name;
}

person.prototype = {
  greet : function() {
    console.log('hello love '+this.name)
  }
};
var frank = new person('jivika');
frank.greet();
