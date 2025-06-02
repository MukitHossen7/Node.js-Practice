const EventEmitter = require("events");

class School extends EventEmitter {
  event() {
    console.log("Class is Started");
    setTimeout(() => {
      this.emit("ballring");
    }, 2000);
  }
}

module.exports = School;
