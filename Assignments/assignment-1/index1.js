//to read and append to the content to the console
const fs = require('fs');

fs.readFile('nodejs_architecture.txt',function(err, data) {
    if (err) {
        console.log("Error in reading file");
    } else {
        console.log("Reding file is successfull", data.toString());
    }
})



const text2 = `\n\nAdvantages of node js:\n
Node.js excels in speed, non-blocking I/O, and event-driven architecture, ideal for\n high-performance, real-time applications. It uses JavaScript across the stack, has a vast package\n ecosystem, and scales effortlessly. Node.js simplifies development with code sharing and enjoys\n strong community support, making it a top choice for modern, high-performance web applications.`

 fs.appendFile('nodejs_architecture.txt', text2, function(err) {
    if(err) {
        console.log("error in apending file");
    }
    else{
        console.log("success in appending file");
    }
})