const http = require("http");
const path = require("path");
const fs = require("fs");

const filePath = path.join(__dirname, "./db/todo.json");

const server = http.createServer((req, res) => {
  // GET all todo data

  if (req.url === "/todos" && req.method === "GET") {
    const todo_data = fs.readFileSync(filePath, { encoding: "utf8" });
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(todo_data);
  }
  // POST a todo data
  else if (req.url === "/todos/create" && req.method === "POST") {
    res.end("Post the Todo DATA");
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("Your res Not Found");
  }
});

server.listen(3000, () => {
  console.log("The Server is running");
});
