const fs = require("fs");

const student = {
    name : "Monika",
    age : 22,
    subject : "node js",
};
console.log(student.name);

const jsonData = JSON.stringify(student);
console.log(jsonData);
fs.writeFile('json1.json',jsonData, (err)=> {
    console.log("done");
});

fs.readFile("json1.json", "utf-8", (err, data)=>{
    console.log(data);
const orgdata = JSON.parse(data);
console.log(orgdata);
});
