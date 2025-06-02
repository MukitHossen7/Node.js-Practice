const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello");
  res.write("Hello Programmer");
  res.end("OMG");
});
server.listen(5000, () => {
  console.log("Server is Running in Port 5000");
});
