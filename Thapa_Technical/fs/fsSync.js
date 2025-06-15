const fs = require("fs");

// fs.writeFileSync("example.txt", "Hello, World! 2", { encoding: "utf8" });
// fs.appendFileSync("test.txt", "\nHello, World! 3", { encoding: "utf8" });
// fs.renameSync("example.txt", "example2.txt");
fs.unlinkSync("example2.txt");
