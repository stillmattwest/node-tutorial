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

router.get('/:name/:id',function(req,res){ // multiple parameters
    res.send("<p>Name: "+req.params.name+"</p><p>ID: "+req.params.id+"</p>");    
});



// can also use regex in a router.xxx method to limit things like IDs of certain lengths, probably some security as well

//export this router to use in our index.js
module.exports = router;