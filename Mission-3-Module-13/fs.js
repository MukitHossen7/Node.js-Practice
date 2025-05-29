const fs = require("fs");

console.log("task 1");
const dream = "My Dream is a DSA Developer";

console.log("task 2");
fs.writeFileSync("text.txt", dream);

console.log("task 3");
const data = fs.readFileSync("text.txt", { encoding: "utf-8" });
console.log(data);
console.log("task 4");
