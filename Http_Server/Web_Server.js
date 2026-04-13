
// Node.js Web Server
// to access web page of any web application , you need a web server. the web server 
// will handle all the http requests for the web application
// Ex - IIS is a web server for ASP.NET web application & APACHE is a web server for php or java

// Node.js Provides Capabilities to create your own web server to handle http request asynchronously

const http = require("http");
// request object used to get info about current HTTP Request. EX - url, request header & data
// response 
const server = http.createServer((req,res)=>{
 res.end("Hello from the others side");
} );

server.listen(8000,"127.0.0.1",()=> {
    console.log("listening the port no 8000");
});