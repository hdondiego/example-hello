let http = require('http');
const port = process.env.PORT || 8080;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.close('<h5>Hello World!</h5>');
}).listen(port);

console.log("Your application is listening on port " + port);