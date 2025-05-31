const http = require("http");
const path = require("path");
const fs = require("fs");
const url = require("url");

const filePath = path.join(__dirname, "./db/todo.json");

const server = http.createServer((req, res) => {
  console.log(req.url);
  // GET all todo data

  if (req.url === "/todos" && req.method === "GET") {
    const todo_data = fs.readFileSync(filePath, { encoding: "utf8" });
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(todo_data);
  }
  // GET single data
  else if (req.url === "/todo" && req.method === "GET") {
    const todo_data = fs.readFileSync(filePath, { encoding: "utf8" });
    // res.writeHead(200, {
    //   "content-type": "application/json",
    // });
    // res.end(todo_data);

    res.end("Get single data");
  }
  // POST a todo data
  else if (req.url === "/todos/create" && req.method === "POST") {
    let data = "";
    req.on("data", (chunk) => {
      data = data + chunk;
    });
    req.on("end", () => {
      const todo = JSON.parse(data);
      const allTodos = fs.readFileSync(filePath, { encoding: "utf8" });
      const todo_data = JSON.parse(allTodos);
      todo_data.push(todo);
      fs.writeFileSync(filePath, JSON.stringify(todo_data, null, 2), {
        encoding: "utf8",
      });
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify(todo));
    });
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("Your res Not Found");
  }
});

server.listen(3000, () => {
  console.log("The Server is running");
});
