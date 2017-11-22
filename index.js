const express = require('express'); // brings in the express module
const app = express(); // a new express object (probably a closure) stored as "app"
const controllers = require('./controllers/controllers.js'); // use this to effectively set up controllers for an MVC format or API endpoints.


app.use('/',controllers); // nice and clean. Controllers.js handles all the routing. This is the only routing reference necessary in index.js

app.listen(3000); // listen is a method of express that runs a node server on port 3000 in this case.
