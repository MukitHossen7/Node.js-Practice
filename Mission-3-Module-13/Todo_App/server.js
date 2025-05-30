const http = require("http");

const data = [
  {
    id: 1,
    title: "Complete React assignment",
    description: "Finish the components and submit by tonight",
    completed: false,
    dueDate: "2025-06-01",
  },
  {
    id: 2,
    title: "Call mentor",
    description: "Discuss project progress and feedback",
    completed: true,
    dueDate: "2025-05-28",
  },
  {
    id: 3,
    title: "Update portfolio website",
    description: "Add latest project and fix broken links",
    completed: false,
    dueDate: "2025-06-05",
  },
  {
    id: 4,
    title: "Buy groceries",
    description: "Milk, eggs, bread, and vegetables",
    completed: true,
    dueDate: "2025-05-29",
  },
  {
    id: 5,
    title: "Read 1 chapter of JavaScript book",
    description: "Focus on closures and scope",
    completed: false,
    dueDate: "2025-05-31",
  },
];

const server = http.createServer((req, res) => {
  if (req.url === "/todos" && req.method === "GET") {
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(JSON.stringify(data));
  } else if (req.url === "/todos/create" && req.method === "POST") {
    res.end("Post the Todo DATA");
  } else {
    res.end("Your res Not Found");
  }
});

server.listen(3000, () => {
  console.log("The Server is running");
});
