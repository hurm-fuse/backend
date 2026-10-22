const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send("hello world");
});
app.get('/about', (req, res) => {
    res.send("hello world from about page");
});
app.listen(4001, () => {
    console.log("Server is running on http://localhost:4001");
});
// npm init -y -> ya aapke liye pne se package json file bna degi 
// npm i express -> install the express package