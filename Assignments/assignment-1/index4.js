const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.write('<h1>I Am Happy To Learn Full Stack Web Development From PW Skills! <h1>')
    }
    res.end();
});

server.listen(5004);
console.log("I am Using port 5004 to runt the http server");
