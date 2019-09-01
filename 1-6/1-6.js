function float_1(){   //函数float_1取得小数点第一位(float_1函数功能 ：1.将输入的数字*10目的是将小数点后一位位移到个位. //2，取整。3，去各位数。
    var moveten = arguments[0] * 10;
    moveten = parseInt(moveten);  //取整
    var stringmoveten = moveten + "";  //将数字变成字符串类似的方法还有数字的tostring()
    var endstringmoveten = stringmoveten.charAt(stringmoveten.length-1);  //取整数任意一位的数值（本题中取得个位）
    var endmoveten = endstringmoveten - 0;  //将字符串变成数字
     return endmoveten;       
 } 
function customRound(){
     if((arguments[0] > 0) && (arguments[1] >= 5)){         //如果输入的数字大于等于0
             var IntA=parseInt(a);
             ++IntA;
         } else if ((arguments[0] > 0) && (arguments[1] < 5)){
            var IntA=parseInt(a);
        } else if((arguments[0] <= -1) && (arguments[1] >= 5)){
            var IntA=parseInt(a);
            --IntA;
        } else if((arguments[0] <= -1) && (arguments[1] < 5)){
            var IntA=parseInt(a);
        } else {
            return 0;
        }
         return IntA;                                                                                                                                                                              
 }
var a = -4.4;
var endnumber = float_1(a);
var returnValue = customRound(a,float_1(a));
console.info(returnValue);
console.info(endnumber);
console.info(parseInt(++a));