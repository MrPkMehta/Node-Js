//To write in the file
const fs = require('fs');

const text = `Here is a simple explanation of Node.js architecture.\n Node.js is like a super-fast chef in a restaurant. It uses one chef (thread) to cook many dishes (requests) at once. \n When an order (request) comes in, the chef doesn't wait for it to finish cooking; instead, the chef starts cooking it and immediately takes another order. \n Node.js is great at handling lots of orders (concurrent requests) quickly because it never stops to wait for something to finish cooking (non-blocking). \n It's like having a chef who's always ready to take the next order without getting overwhelmed.\nPlus, Node.js has a magic recipe book (modules) and super-fast cooking tools (V8 engine) to make everything even faster.\n So, it's perfect for serving a lot of hungry customers (users) without making them wait too long.`;

fs.writeFile('nodejs_architecture.txt', text, function(err) {
    if (err) {
        console.log("Error in writing file.");
    } else {
        console.log("Writing in file is successful");
    }
});