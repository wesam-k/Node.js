let http = require('http');
let path = require('path');


// create a server
let server = http.createServer(function (req, res) {
    res.setHeader('Content-Type', "tex/html"); //send a response back to the client
    res.setHeader('Content-Type', "tex/javascript"); //send a response back to the client
    res.end(); //end the response
});
http.get('/', function (req, res) {
    res.setHeader('Content-Type', "tex/html")
    res.sendFile(path.join(__dirname + '/index.html'))
});


http.listen(3000);

