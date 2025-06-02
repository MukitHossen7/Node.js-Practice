const fs = require("fs");
const path = require("path");

const pathName = path.join(__dirname, "/bigdata.txt");
const pathName2 = path.join(__dirname, "/output.txt");

// const ourReadStream = fs.createReadStream(pathName, { encoding: "utf8" });
// ourReadStream.on("data", (chunk) => {
//   console.log(chunk);
// });

const ourReadStream = fs.createReadStream(pathName);
const ourWriteStream = fs.createWriteStream(pathName2);

// ourReadStream.on("data", (chunk) => {
//   ourWriteStream.write(chunk);
// });
ourReadStream.pipe(ourWriteStream);
