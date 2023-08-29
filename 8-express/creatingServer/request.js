const http = require('http');

const PORT = 3030;
const HOSTNAME = 'localhost';

const server = http.createServer((req, res) => {
    //Home page
    //About page
    //Contact page
    //Product page
    //Rest... > Error

    if (req.url == '/') {

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Welcome to node js server by MrMehta');

    } else if (req.url == '/about') {
        
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('About Page!');

    } else if (req.url == '/contact') {

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Contact Page!');

    } else if (req.url == '/product') {

        //Hear we do the api request for the product from this website fakestoreapi.com 
        const options = {
            hostname: 'fakestoreapi.com',
            path: '/products/1',
            method: 'GET'
        }
        const apiReq = http.request(options, (apiRes) => {
            apiRes.on("data", (data) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(data.toString());
            })
        });

       apiReq.on("error", () => {
        console.log(e);
       });

       apiReq.end();

    } else {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end('Server Error');
    }

});



server.listen(PORT, () => {
    console.log(`Server running at ${HOSTNAME}:${PORT}`);
})