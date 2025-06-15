const fs = require("fs");

fs.writeFileSync("example.txt", "Hello, World! 2", { encoding: "utf8" });
// fs.appendFileSync("test.txt", "Hello, World! 2", { encoding: "utf8" });
