const os = require("os");
console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());

const freeMemory = os.freemem();
// console.log(freeMemory); value receive in bytes
console.log(`${freeMemory/1024/1024/1024}`);  // now convert bytes into gb

const totalMemory = os.totalmem();
console.log(`${totalMemory/1024/1024/1024}`);