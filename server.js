const http = require("http");
const serveStatic = require("serve-static");
const finalhandler = require("finalhandler");
const port = 80;

http.createServer((request, response) => {
  serveStatic("./")(request, response, finalhandler(request, response));
}).listen(port);
