const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    return res.render('content.pug');
});



//export this router to use in our index.js
module.exports = router;