var fs = require('fs');
fs.rename('./text.txt', './newfile.txt', function(error){
    if(error)
    {
        console.log(error);
    }
;})