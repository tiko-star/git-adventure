'use strict';

const express = require('express');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/hello/{name}', (req, res) => {
    res.send(`Hello ${req.params.name}`);
});

app.get('/about-us', (req, res) => {
    res.send('We are developers!!!');
});

const server = app.listen(8888, () => {
    console.log('app is listening on port 8888 ...');
});