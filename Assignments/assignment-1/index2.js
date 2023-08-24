//To delete the file
const fs = require('fs');

fs.unlink('nodejs_architecture.txt', function(err) {
    if (err) {
        console.log("Error in Deleting File");
    } else {
        console.log("File deleted succesfully");
    }
})