const http = require("http");

const PORT = 2024;
const HOSTNAME = 'localhost';

//to create the server
const server = http.createServer((req, res) => {

    //200 means server is running succesfully and responce is returned
    //500 means any internal error in running the server
   /* res.statusCode = 200;
    res.setHeader('content-type', 'text/plain');

    //Bydefault response
    res.end('Node server is created by MrMehta!');*/


    //Hear 500 statuscode return the error 
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    //hear we can pass the error in the object format and the data is transfered in the string format so we can use JSON.stringify
    res.end(JSON.stringify({error: "Server Error!"}));
     
});

//to access the server
//arrow function defines the server is up or running
server.listen(PORT, () => {
    console.log(`server running at ${HOSTNAME}:${PORT}`);
})