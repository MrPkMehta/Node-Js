const express = require("express");

const app = express();

const PORT = 4020;
const HOSTNAME = 'localhost';

app.get('/', (req, res) => {
    res.send('<H1>Hellow World!</h1>');
})

app.get('/about', (req, res) => {
    res.send('About page!');
})

app.get('/contact', (req, res) => {
    res.send('Contact page!');
})

app.listen(PORT, () => {
    console.log(`Server is ruuning at ${HOSTNAME}: ${PORT}`);
})