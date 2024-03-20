var fs = require('fs');
fs.unlink('./text.txt', function(error){
    if(error)
    {
        console.log(error);
    }
;})