const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/todos" && req.method === "GET") {
    res.end("All GET Todo DATA");
  } else if (req.url === "/todos/create" && req.method === "POST") {
    res.end("Post the Todo DATA");
  } else {
    res.end("Your res Not Found");
  }
});

server.listen(3000, () => {
  console.log("The Server is running");
});
