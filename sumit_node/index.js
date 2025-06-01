const path = require("path");
const os = require("os");
const fs = require("fs");
const pathName = "E:/Node.js-Practice/sumit_node/index.js";
// console.log(path.basename(pathName));
// console.log(path.dirname(pathName));
// console.log(path.extname(pathName));
// console.log(path.parse(pathName));

// console.log(os.platform());
// console.log(os.homedir());
// console.log(os.freemem());
// console.log(os.cpus());

// fs.writeFileSync("text.txt", "Hello Developer");
fs.appendFileSync("text.txt", "Hello Mukit \n");
