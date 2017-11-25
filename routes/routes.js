// routes.js is a route aggregator for the entire app. All routes go to the appropriate controller

const express = require('express');
const router = express.Router();
// set a const for all controllers here
const cat01 = require('../controllers/cat01.js');
const cat02 = require('../controllers/cat02.js'); 
const first_template = require('../controllers/first_template.js');
const components = require('../controllers/components.js');
const forms = require('../controllers/forms.js');
const person = require('../controllers/person.js');
const cookie = require('../controllers/cookie.js');

// collect routes here
router.use('/cat01', cat01);
router.use('/cat02', cat02);
router.use('/first_template',first_template);
router.use('/components',components);
router.use('/forms',forms);
router.use('/person',person);
router.use('/cookie',cookie);

//default route
router.get('/', function (req, res, next) {
    return res.send("This is the index page");
});

//404 route
router.get("*", function (req, res,next) {
    return res.send("That's a 404, buddy.");
});

//export this router to use in our index.js
module.exports = router;