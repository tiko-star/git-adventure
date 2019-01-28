'use strict';

const express = require('express');
const app = express();

const server = app.listen(8888, () => {
    console.log('app is listening on port 8888 ...');
});