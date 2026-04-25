const express = require("express");

const app = express();

app.get('/', (req,res)=>{
    res.write("hello i am creating a server using express");
});

app.listen(3000,()=>{
    console.log("server running");
})