var fs = require('fs');
fs.rmdir('./rulniki' , function(error){
    if(error){
        console.log(error);
    }else{
        console.log('goojob');
    }
;})