const express = require('Express');
const router = express.Router();
const cat01 = require('./cat01.js');
const cat02 = require('./cat02.js');

router.get('/',function(req,res){
    res.send("This is the index page")
});

router.use('/cat01',cat01);
router.use('/cat02',cat02);

//export this router to use in our index.js
module.exports = router;