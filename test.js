var events = require('events'); 
var emitter = new events.EventEmitter(); 

emitter.on("error",function(){
console.log("find error");
});

emitter.emit('error'); 
