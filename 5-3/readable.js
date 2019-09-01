"use strict"
const Readable = require('stream').Readable;
const iterator = function (string) {
    let cnt = string.length;
    return{
        next:function(){
            if(cnt-- > 0){
                return {
                    value:string[cut],
                    done:false,
                }
            }
        }
    }('stefan');
    class ToReadable extends Readable{
        constructor(){
            
        }
    }
}