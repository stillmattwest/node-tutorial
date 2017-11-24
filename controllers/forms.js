const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    return res.render('form.pug');
});

router.post('/',function(req,res){
    console.log(req.body);
    return res.send("Form request received.");
})



//export this router to use in our index.js
module.exports = router;