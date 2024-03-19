var fs = require('fs');
fs.readdir('./przyklady', function(error, listaPlikow){
    console.log(listaPlikow)
;})