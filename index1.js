const fs = require("fs");
fs.writeFile("read1.txt","Today is awesome day",
(err)=> {
console.log("file is created ");
console.log(err);
});

// we pass them a function as an argument - a callback - 
// that gets called when that task completes
//The callback has an aruguments that tells you whether the operation completed successfully 
// now we need to say what to do when fs.writeFile has completed (even if its nothing), & start checking for errors.

// fs.appendFile("read1.txt"," i am learing asynchronous file system", (err)=>{console.log("task completed")});
fs.readFile("read1.txt","utf-8",(err,data)=>{console.log(data)});