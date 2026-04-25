// // Events is a built in  node module
// const EventEmitter = require("events");
// const event = new EventEmitter();
// event.on('sayMyName', ()=>{
//     console.log("your name is monika");
// });
// event.on('sayMyName', ()=>{
//     console.log("your name is lovely");
// });
// event.on('sayMyName', ()=>{
//     console.log("your name is yashmeen");
// });
// event.on('sayMyName', ()=>{
//     console.log("your name is neha");
// });

// event.emit('sayMyName');

// event.on('checkPage', (sc,msg)=>{
//     console.log(`status code is ${sc} and the page is ${msg}`)
// })
// event.emit('checkPage', 200 ,"ok");

const EventEmitter = require("events");
const emitter = new EventEmitter();

// Step 1: Create a function
const greetuser = ()=>{
    console.log("hello dear");
};

emitter.on('greet',greetuser);

// Step 3: Remove listener
emitter.off("greet", greetuser);

// Step 4: Emit event
emitter.emit("greet");