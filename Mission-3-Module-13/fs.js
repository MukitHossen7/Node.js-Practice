const fs = require("fs");

const dream = "My Dream is a DSA Developer";

fs.writeFileSync("text.txt", dream);

const data = fs.readFileSync("text.txt", { encoding: "utf-8" });
console.log(data);
