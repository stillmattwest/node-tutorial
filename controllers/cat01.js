const express = require('express');
const router = express.Router();


router.get('/', function(req, res){
   res.send('Cat01 GET route.');
});
router.post('/', function(req, res){
   res.send('Cat01 POST route.');
});

router.get('/:id',function(req,res){ // add request parameters
    res.send("The id you specified is: "+req.params.id);    
});


//export this router to use in our index.js
module.exports = router;