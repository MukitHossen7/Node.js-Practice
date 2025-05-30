const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      res.end("Hello Java");
    } else if (req.url === "/get-todo") {
      res.end("get todo data");
    }
  }
  if (req.method === "POST") {
    if (req.url === "/add-todo") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });

      req.on("end", () => {
        console.log("Received body:", body);

        // Try to parse JSON if applicable
        try {
          const data = JSON.parse(body);
          console.log("Parsed JSON:", data);

          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ message: "Data received", received: data }));
        } catch (err) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "Invalid JSON" }));
        }
      });
    }
  }
});
server.listen(3000, () => {
  console.log("The server is running");
});
