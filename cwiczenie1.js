var fs = require('fs');
fs.readFile('./text.txt', 'utf-8', function(error, odczytaj){
    console.log(odczytaj);
});