// Note: this app uses an MVC format with controllers, models, and views all in separate folders. Database connection is defined in DAL folder. Controllers are aggregated in controllers/controllers.js

const express = require('express'); // brings in the express module
const app = express(); // a new express object
// set a route aggregator
const routes = require('./routes/routes.js'); 
const multer = require('multer');
const upload = multer();

// set pug as view engine
app.set('view engine', 'pug');
app.set('views','./views');

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

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 

// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

// express session
const expressSession = require('express-session');
app.use(expressSession('secret'));

//to allow serving of static files, including images. We can also specify multiple static directories.
app.use(express.static('public'));

// all routes are aggregated in routes/routes.js like they should be
app.use('/', routes); 

// server is up
app.listen(3000); // listen is a method of express that runs a node server on port 3000 in this case.
