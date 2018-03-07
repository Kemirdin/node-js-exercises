var http = require('http');
var jsonData = {
    'name': 'NodeJS',
    'lang': 'Javascript',
    'use': 'Write once, run everywhere'
};
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(jsonData));
}).listen(8080);
console.log("We are now listening on port 8080"); //Helps us know our app is actually running