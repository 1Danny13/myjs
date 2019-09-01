"use strict"
const fs = require('fs');
/* fs.readdir('.',(err,files)=>{
    console.log(files);
})
fs.stat('./find.js',(err,stat)=>{
    console.log(stat);
}) */
/* console.log(fs.readdirSync('.'));
console.log(fs.stat('./find.js')); */
let readable = fs.createReadStream('./src.txt');
let writable = fs.createWriteStream('./target.txt');

readable.pipe(writable);