var fs = require('fs');
fs.mkdir('./rulniki' , function(error){
    if(error){
        console.log(error);
    }else{
        console.log('goojob');
    }
;})