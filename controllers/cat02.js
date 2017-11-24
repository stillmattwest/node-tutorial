const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    return res.send('Cat02 GET route.');
});
router.post('/', function (req, res) {
    return res.send('Cat02 POST route.');
});

router.get('/static_test',function(req,res){
    res.render('static_test.pug');
});


//export this router to use in our index.js
module.exports = router;