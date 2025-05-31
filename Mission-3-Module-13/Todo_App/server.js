const http = require("http");
const path = require("path");
const fs = require("fs");
const url = require("url");

const filePath = path.join(__dirname, "./db/todo.json");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathName = parsedUrl.pathname;
  const query = parsedUrl.query;

  // GET all todo data
  if (pathName === "/todos" && req.method === "GET") {
    const todo_data = fs.readFileSync(filePath, { encoding: "utf8" });
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(todo_data);
  }
  // GET single data
  else if (pathName === "/todo" && req.method === "GET") {
    const todoId = parseInt(query.id);
    if (!todoId) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Todo ID is required in query param" }));
      return;
    }
    const todo_data = fs.readFileSync(filePath, { encoding: "utf8" });
    const todos = JSON.parse(todo_data);
    const todo = todos.find((data) => data.id === todoId);

    if (!todo) {
      res.writeHead(400, { "content-type": "text/plain" });
      res.end("Can not find any Data");
    } else {
      res.writeHead(200, {
        "content-type": "application/json",
      });
      res.end(JSON.stringify(todo));
    }
  }
  // POST a todo data
  else if (pathName === "/todos/create" && req.method === "POST") {
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
  }
  // DELETE one data
  else if (pathName === "/todo/delete" && req.method === "DELETE") {
    const todoId = parseInt(query.id);
    const todoData = JSON.parse(
      fs.readFileSync(filePath, { encoding: "utf8" })
    );
    const filterData = todoData.filter((data) => data.id !== todoId);
    fs.writeFileSync(filePath, JSON.stringify(filterData, null, 2));

    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Todo Deleted Successfully");
  }
  // UPDATE one Todo data
  else if (pathName === "/todo/update" && req.method === "PATCH") {
    let data = "";
    req.on("data", (chunk) => {
      data = data + chunk;
    });

    req.on("end", () => {
      const todo = JSON.parse(data);
      const todoId = parseInt(query.id);
      const todoData = JSON.parse(
        fs.readFileSync(filePath, { encoding: "utf8" })
      );
      const todoIndex = todoData.findIndex((data) => data.id === todoId);
      if (todoIndex !== -1) {
        todoData[todoIndex] = { ...todoData[todoIndex], ...todo };
      }
      fs.writeFileSync(filePath, JSON.stringify(todoData, null, 2));
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ message: "Todo updated successfully!" }));
    });
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("Your res Not Found");
  }
});

server.listen(3000, () => {
  console.log("The Server is running");
});
