const express = require('express');
const router = express.Router();

// This is a controller that touches the database via the DAL. The first two lines provide that

const db = require("../DAL/DAL.js");
const Person = db.Person;

router.post('/', function(req, res){
    console.log("forms post received");
    var personInfo = req.body; //Get the parsed information
    
    if(!personInfo.name || !personInfo.age || !personInfo.nationality){
       res.render('show_message', {
          message: "Sorry, you provided worng info", type: "error"});
    } else {
       var newPerson = new Person({
          name: personInfo.name,
          age: personInfo.age,
          nationality: personInfo.nationality
       });
         
       newPerson.save(function(err, Person){
          if(err)
             res.render('show_message', {message: "Database error", type: "error"});
          else
             res.render('show_message', {
                message: "New person added", type: "success", person: personInfo});
       });
    }
 });

 module.exports = router;