/**
 * Copyright (c) 2021 Karat Financial
 *
 * @summary Entry point to karat-api
 * @author Ian Arko <ianrichardarko@gmail.com>
 */

// Imports
const express = require('express');
var path = require('path');

// Setup Express App
const app = express();

// Import routes
var apiRouter = require('./routes/api');
var hooksRouter = require('./routes/hooks');

// Apply routes to router
app.use('/api', apiRouter);
app.use('/hooks', hooksRouter);
app.use('/', express.static('views'))

// For Undefined Routes Send 404
app.get('*', function (req, res) {
    res.sendStatus(404);
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
});