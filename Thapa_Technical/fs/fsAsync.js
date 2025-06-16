const fs = require("fs");

fs.writeFile("example.txt", "Hello, World! 2", { encoding: "utf8" }, (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("File written successfully");
  }
});
