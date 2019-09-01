/* var counter = function(arr){
      return "there are" + arr.length +"elements in the array"; 
} 
module.exports = counter; */
var add = require('./app');
console.log(add.counter(['cube','node','react']));
console.log(add.adder(2,3));
console.log(add.pi);