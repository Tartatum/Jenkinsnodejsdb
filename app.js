const express = require('express');
const app = express();
const host = 'localhost';
const port = 8081;
const session = require('express-session');

app.get('/', (req, res) => {
    res.send(`Hello from my node app, it is your first time here ! Welcome :)`);

});

// Get function in which send session as routes.
app.get('/session', function(req, res, next) {

    if (req.session.views) {
        
    // Increment the number of views.
    req.session.views++

    // Print the views.
    res.write('<p> No. of views: '
        + req.session.views + '</p>')
    res.end()
    } else {
    req.session.views = 1
    res.end(' New session is started')
    }
})

app.listen(port, () => {
});