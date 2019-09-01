function applyArr(){

    var arr = [];

    for (var i = 0; i < 10; i++ ){
      (function (index){
        arr.push(function() {
            return index;
      });
    })(i);
    }
    return arr;
}

var arr = applyArr();
var b = arr[1]();
console.info(b);