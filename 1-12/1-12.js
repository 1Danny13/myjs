function datefn(){

   

    var day = date.getDay();
    var month = date.getMonth();
    var year = date.getFullYear();

    if(day <= 9){
        return 0 + day;
    } else {
        return day;
    }
    if(month <= 9){
        return 0 + month;
    } else {
        return month;
    }

    return year + '-' + month + '-' + day;

}
var parameter;
var date = new Date();
var date1 = datefn();
console.log(date1);