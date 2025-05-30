const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello Javascript Developer");
});
server.listen(3000, () => {
  console.log("The server is running");
});
