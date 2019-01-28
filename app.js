'use strict';

const express = require('express');
const bodyparser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet')

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyparser.json());

// compress all responses
app.use(compression());

app.use(helmet());

app.get('/hello/:name', (req, res) => {
    res.send(`Hello ${req.params.name}`);
});

app.get('/about-us', (req, res) => {
    res.send('We are developers!!!');
});

app.get('/contacts', (req, res) => {
    res.send('Our contacts');
});

app.get('/foo', (req, res) => {
    res.send('foooo...');
});

const server = app.listen(8888, () => {
    console.log('app is listening on port 8888 ...');
});

process.on('SIGINT', () => {
    console.info('closing server connection ...');

    server.close(() => {
        console.log('server connection closed ...');
    });
});