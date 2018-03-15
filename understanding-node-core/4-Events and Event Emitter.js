var events = require ('events');
var emitter = new events.EventEmitter ();

//listening 'docall' event
emitter.on ('docall', function () {
  console.log ('ring ring ring');
});
//emitting 'docall' event
emitter.emit ('docall');
