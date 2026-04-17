const fs = require("fs");

// create a folder 
fs.mkdir("Monika", (err)=>{
    console.log("folder created");
});

// create a file inside monika folder 
fs.writeFile("./Monika/BIO.txt","Myself Monika Saini",(err)=>{
    console.log("file created");
})

// to add content - append
fs.appendFile("./Monika/BIO.txt", " Currently I am pursuing MCA" ,(err) =>{
    console.log("files data appended")
});

// read a file
fs.readFile("./Monika/BIO.txt",'utf-8', (err,data) =>{
    console.log(err);
});

// rename a file
fs.rename("./Monika/BIO.txt","./Monika/MyBIO.txt",(err) =>{
    console.log("files rename done");
});
fs.unlink("./Monika/MyBIO.txt",(err) =>{
    console.log("files deleted");
});

fs.rmdir("./Monika",(err) =>{
    console.log("folder deleted");
});
