const EventEmitter = require("events");

class GetJob extends EventEmitter {}

const getJob = new GetJob();

getJob.on("internship", () => {
  console.log("Yes I get a Internship");
});

getJob.on("internship", () => {
  console.log("Yes i get a Internship that Intern time 3 month");
});

getJob.on("permanent", () => {
  console.log("Hurry!! I get a Job");
});

getJob.emit("permanent");
getJob.emit("internship");
