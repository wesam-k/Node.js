let http = require('http');
let fs = require('fs');


let server = http.createServer(function (req, res) {
  res.write(200, {
    'Content-Type': 'application/javascript'
  });
  if (req.url === '/script.js') {
    res.setHeader(fs.readFile('script.js'));
  } else {
    res.write(`<html>
    <head>
      <title>My First Web Server</title>
    </head>
    <body>
      <h1>Hello, anyone there?</h1>
      <div id="content"></div>
      <script src="script.js"></script>
    </body>
  </html>`);
    res.end();
  };
})

server.listen(3000);