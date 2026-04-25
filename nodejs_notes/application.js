// Import required modules
const http = require("http");
const fs = require("fs");
const EventEmitter = require("events");

// Create event emitter
const emitter = new EventEmitter();

// -----------------------------
// EVENT + LISTENER + CALLBACK + I/O
// -----------------------------

// Listener for reading file
emitter.on("readData", (res) => {
    // Timer to simulate delay
    setTimeout(() => {

        // Callback-based file reading (I/O)
        fs.readFile("data.txt", "utf8", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Error reading file");
                return;
            }

            // Send response after reading file
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end(data);
        });

    }, 2000); // 2 sec delay
});

// -----------------------------
// HTTP SERVER
// -----------------------------

const server = http.createServer((req, res) => {

    // Route: Home
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Welcome to Node.js Server 🚀");
    }

    // Route: Read Data (FULL FLOW)
    else if (req.url === "/data") {
        // Trigger event
        emitter.emit("readData", res);
    }

    // Route: Timer demo
    else if (req.url === "/timer") {
        setTimeout(() => {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Response after 3 seconds ⏰");
        }, 3000);
    }

    // Route: Not Found
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
    }
});

// Start server
server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});