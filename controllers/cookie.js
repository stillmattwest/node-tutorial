// how to use cookies

const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    return res.cookie('mattCookie','Told_you_it_was_set').send('You just set a cookie. In the console, enter "document.cookie" to see it.');
});

module.exports = router;