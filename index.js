const express = require('express'); // brings in the express module
const app = express(); // a new express object (probably a closure) stored as "app"
const controllers = require('./controllers/controllers.js'); // use this to effectively set up controllers for an MVC format or API endpoints.

// pre-routing middleware
// body-parser
//To parse URL encoded data
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
//To parse json data
app.use(bodyParser.json());

// cookie parser
const cookieParser = require('cookie-parser');
app.use(cookieParser('secret'));

// express session
const expressSession = require('express-session');
app.use(expressSession('secret'));

//route handling
app.use('/', controllers); // nice and clean. Controllers.js handles all the routing. This is the only routing reference necessary in index.js



// server is up
app.listen(3000); // listen is a method of express that runs a node server on port 3000 in this case.
