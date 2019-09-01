"use strict"
const reg = process.argv[2];
const path = process.argv[3];

if(!reg || !path){
    console.info('error!');
    return;
}
const fs = require('fs');
const join = require('path').join;

function findSync(reg,spath){
    let results = [];
    function find(path){
        var files = fs.readdirSync(path);
        files.forEach(file=>{
            let fpath = join(path,file);
            let stat = fs.statSync(fpath);

            if(stat.isDirectory())
              find(fpath);
            if(stat.isFile() && reg.test(file))
              results.push(fpath);
        })
    }
    find(spath);
    return results;
}
console.info(findSync(new RegExp(reg),path));