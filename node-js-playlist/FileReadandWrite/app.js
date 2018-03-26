
var fs = require ('fs');


var sample = fs.readFileSync ('sample.txt', 'utf8');

console.log (sample);


fs.writeFileSync ('output.txt', sample);
