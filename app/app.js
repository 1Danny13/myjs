//console.log(__dirname);
//console.log(__filename);
/* var time = 0;
var set = setInterval(()=>{
    time += 2;
    console.log(time +'seconds time!');
    if(time >10)
     clearInterval(set);
},2000); */

/* function myfun(){
    console.log('hi');
}
myfun();

var my = function(name){
    console.log('bye!'+ name);
}
my();

function callfunction(my,name){
    my(name);
}
callfunction(my,'and you') */
/* 
function myfun(name){
    console.log(name+'bye!');
}
function callfunction(myfun,name){
    myfun(name);
}
callfunction(myfun,'and hi!'); */
/* var counter = require('./count');
console.log(counter(["cube","node","react"])); */

var counter = function(arr){
    return "there are "+ arr +"elements in the array!";
}
var adder = function(a,b){
    return `${a + b}`;
}
var pi = 3.14;

module.exports = {
    counter:counter,
    adder:adder,
    pi:pi
}