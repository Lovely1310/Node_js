// JSON FOR JAVASCRIPT OBJECT NOTATION
// JSON IS A LIGHTWEIGHT
// FORMAT FOR STORING & TRANSPORTING DATA
// JSON IS OFTEN USED WHEN DATA IS SENT FROM A SERVER TO A WEB PAGE.

const { channel } = require("node:diagnostics_channel");

const biodata = {
    name : "lovely",
    age : 26,
    channel : "learn_with_lovely",
};
console.log(biodata.channel);
console.log(biodata.name);
const jsonData = JSON.stringify(biodata);
console.log(jsonData);

const objdata = JSON.parse(jsonData);
console.log(objdata);