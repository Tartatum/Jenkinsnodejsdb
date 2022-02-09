const express = require('express');
const app = express();
const host = 'localhost';
const port = 8081;


app.get('/', (req, res) => {
    res.send(`Hello from my node app, it is your first time here ! Welcome :)`);

});

app.listen(port, () => {
});