const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
   res.send('Cat02 GET route.');
});
router.post('/', function(req, res){
   res.send('Cat02 POST route.');
});


//export this router to use in our index.js
module.exports = router;