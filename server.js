const express = require('express');
const app = express();
const fs = require('fs');

const server = app.listen(3000, () => {
    console.log('start success on port : ', 3000);
});

app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/First', (req, res) => {
    res.render('first.html');
});

app.get('/Second', (req, res) => {
    res.render('second.html');
});
