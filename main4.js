const EventEmitter = require('events');

const myEmitte = new EventEmitter();

myEmitte.on('test',(arg1,arg2,arg3) => {
    console.log("Success!");
    console.log(arg1);
    console.log(arg2);
    console.log(arg3);
})

myEmitte.emit("test",'a','b','c');