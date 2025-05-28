const { add, name, fullName } = require("./file2");
const { add: add3, name: name3, fullName: fullName3 } = require("./file3");

console.log(add(2, 5));
console.log(fullName("Mukit", "Islam"));
console.log(name);

console.log(add3(2, 5, 5));
console.log(fullName3("Mukit", "Islam"));
console.log(name3);
