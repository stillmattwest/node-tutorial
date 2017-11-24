const express = require('express');
const router = express.Router();
// set a const for all controllers here
const cat01 = require('./cat01.js');
const cat02 = require('./cat02.js'); 
const first_template = require('./first_template.js');
const components = require('./components.js');
const forms = require('./forms.js');



// point to all controllers here, once added above
router.use('/cat01', cat01);
router.use('/cat02', cat02);
router.use('/first_template',first_template);
router.use('/components',components);
router.use('/forms',forms);

//default route
router.get('/', function (req, res, next) {
    return res.send("This is the index page");
});

//404 route
router.get("*", function (req, res,next) {
    // will catch anything that isn't a route match. Works for all routes, which is awesome. Must live at the bottom of the file.
    return res.send("That's a 404, buddy.");
});

//export this router to use in our index.js
module.exports = router;