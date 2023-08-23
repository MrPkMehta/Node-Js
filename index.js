const { log } = require('console');
const fs = require('fs');

console.log("Read Start");

//Asynchronous way to read the file

fs.readFile('input.txt', function(err, data){
    if(err) {
        console.log("error", err);
        return err;
    }
    console.log("Data:", data.toString());
    console.log("Read file");
    return data;
});

console.log("Other stuff");
/** hear we can see that first the read start is happen and then the last console was printed after that the function was executed */

/* OUTPUT -Read Start
Other stuff
Data: hello  this is priyamanshu kumar
Learning Web Development course From pwskills
Read file */

console.log("--------------------------------------");





//** Asynchronous way to read file*/

console.log("read start");
var data = fs.readFileSync("input.txt");
console.log('data:', data.toString()); //tostring means read the data in the form of string
console.log("read end");
console.log("other stuff");
/**OUTPUT- read start
data: hello  this is priyamanshu kumar
Learning Web Development course From pwskills
read end
other stuff */




//READ > OPEN + READ
const buf = new Buffer(1024);
//to open file
fs.open('input.txt', 'r+', function(err, fd){
    if (err) {
        console.log('error in opening file', err);
    }
    else{
        console.log("file open succesfully!");

        fs.read(fd, buf, 0, buf.length, 0, function (er, bytes){
            if (er) {
                console.log("Error in reading file");
            }
            else{
                console.log('data:', bytes);
                console.log('Data:', buf.slice(0, bytes).toString());

                //to close the file
                fs.close(fd, function(err){
                    if (err) {
                        console.log('Error in closing file');
                    }
                    else {
                        console.log("clossing file is succesfully");
                    }
                })
            }
        })
    }
})



//writing to file 
//in this case file is overriding means previous text is deleted and new text is added
fs.writeFile('input.txt', 'i love you', function(err) {
    if (err) {
        console.log("Error in writing file");
    }
    else {
        console.log("success in writing file");
    }
} )



//Append to file 
// Along with the previous text new text is added

fs.appendFile('index.txt', '    MrMehta', function(err) {
    if(err) {
        console.log("error in apending file");
    }
    else{
        console.log("success in appending file");
    }
})




// Deleting file
fs.unlink('input.txt', function(err) {
    if(err) {
        console.log("Error in deleting file");
    }
    else {
        console.log("Deleting file in succesfully");
    }
})