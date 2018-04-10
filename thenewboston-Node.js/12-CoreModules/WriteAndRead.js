var fs = require("fs");
fs.writeFileSync("corn.txt", "Corn is a good,Corn is a life");
console.log(fs.readFileSync("corn.txt").toString());
