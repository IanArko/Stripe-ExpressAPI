// Imports
const express = require('express');
var path = require('path');

// Setup Express App
const app = express();

// App API route
var apiRouter = require('./routes/api');
app.use('/api', apiRouter);

// App HOOKS route
var hooksRouter = require('./routes/hooks');
app.use('/hooks', hooksRouter);

// APP Static site
app.use('/', express.static('views'))

// For Undefined Routes Send 404
app.get('*', function (req, res) {
    res.sendStatus(404);
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
});