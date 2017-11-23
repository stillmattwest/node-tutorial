const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    return res.render('first_view'); // can auto-find files in view folder due to setting in index.js
});

router.get('/dynamic_view', function(req, res){
   res.render('dynamic', {
      name: "TutorialsPoint", 
      url:"http://www.tutorialspoint.com"
   });
});


//export this router to use in our index.js
module.exports = router;