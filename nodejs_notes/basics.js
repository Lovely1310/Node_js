const Express = require("express");
const app = Express();

app.get('/',(req,res)=>{
res.send("hello I am giving response to you");
});

app.listen(3000 , ()=>{
    console.log("server running");
});

