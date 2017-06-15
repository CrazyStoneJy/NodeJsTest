var events = require("events");

var eventEmitter = new events.EventEmitter();

var connectHandler = function connect(){
  console.log("connect success");
  eventEmitter.emit("send");
}
var sendHandler = function send(){
  console.log("send success");
}

eventEmitter.on("connect",connectHandler);
eventEmitter.on("send",sendHandler);

eventEmitter.emit("connect");

console.log("finish");
