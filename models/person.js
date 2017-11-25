// This is how models should work. Basically, just an simple JavaScript object. It is exported into the DAL to become a functional model. 

var personSchema = {
    name: String,
    age: Number,
    nationality: String
};

module.exports = personSchema;