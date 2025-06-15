const path = require("path");

// console.log(__dirname);
// console.log(__filename);

const filePath = path.join(__dirname, "test", "test.txt");
console.log(filePath);
console.log(path.parse(filePath));
console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.extname(filePath));
console.log(path.resolve("test", "test.txt"));
