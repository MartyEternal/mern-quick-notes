const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

require('dotenv').config();
require('./config/database');

const app = express();

app.use(logger('dev'));
app.use(express.json());

// configure both serve-favicon and static middleware to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// middleware to verify token and assign user object of payload to req.user
// be sure to mount before routes
app.use(require('./config/checkToken'));
app.use('/api/users', require('./routes/api/users'));

// put API routes here, before the "catch all" route


// the following "catch up" route (note the *) is necessary to return the index.html on all non-AJAX requests
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// configure to use port 3001 instead of 3000 during development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function () {
    console.log(`Express app running on port ${port}`)
});

