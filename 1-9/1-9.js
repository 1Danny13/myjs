function Person(name,id){
    this.name = name;
    this.id = id;
    Person.prototype.sayHi=function (){
        console.log('my'+this.name);
    }
}
var p1 = new Person('name danny',1234);
console.log(p1.sayHi());