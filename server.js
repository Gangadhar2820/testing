const http = require("http");

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  console.log("success")
  res.end("Hello, World!\n");

});

server.listen(PORT,()=>{console.log("server started successfully")});