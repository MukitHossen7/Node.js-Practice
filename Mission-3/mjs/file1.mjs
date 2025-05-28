import { add as add3, name as name3, fullName as fullName3 } from "./file3.mjs";
import { add, name, fullName } from "./file2.mjs";
import myCourse from "./file3.mjs";

console.log(add(2, 5));
console.log(fullName("Mukit", "Islam"));
console.log(name);

console.log(add3(2, 5, 5));
console.log(fullName3("Mukit", "Islam"));
console.log(name3);
console.log(myCourse);
