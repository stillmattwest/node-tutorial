// This is how models should work. Basically, just an simple JavaScript object. It is imported by the DAL to become a functional model. 

let personSchema = {
    name: String,
    age: Number,
    nationality: String
};

module.exports = personSchema;