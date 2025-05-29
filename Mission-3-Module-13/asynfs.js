const fs = require("fs");

console.log("task 1");
const message = "I love Javascript";
fs.writeFile("./hello.txt", message, (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
});
console.log("task 2");
fs.readFile("./hello.txt", { encoding: "utf8" }, (err, data) => {
  if (err) {
    console.log("I can not find the file", err);
    return;
  }
  console.log(data);
});
console.log("task 3");
