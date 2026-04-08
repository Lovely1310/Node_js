const fs = require("fs");
fs.writeFileSync("read.txt","welcome to my channel");
fs.writeFileSync("read.txt","welcome ");
fs.appendFileSync("read.txt","Today we learned node.js core modules - same like js library");
const buf_data = fs.readFileSync("read.txt");
// Node.js includes an additional data type called buffer.
// not available in browser javascript. 
// buffer is mainly used to store binary data.
// while reading from a file or receiving packets over the network.
console.log(buf_data);
org_data = buf_data.toString();
console.log(org_data);

// to rename the file

fs.renameSync("read.txt","readwrite.txt");