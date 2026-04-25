const EventEmitter = require("events");
const eventemitt = new EventEmitter();

eventemitt.on("reminder", ()=>{
    console.log("its reminder to remind that you should learn node js");
});
// setTimeout - Run once after delay
setTimeout(() => {
   eventemitt.emit("reminder"); 
}, 2000);

// setInterval - Runs again and again after 2sec according to time 
setInterval(() => {
   eventemitt.emit("reminder"); 
}, 2000);

// clearTimeout() and clearInterval() -  Used to stop timers
clearInterval(() => {
   eventemitt.emit("reminder"); 
}, 2000);