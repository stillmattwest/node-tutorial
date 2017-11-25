// This is how models should work. Basically, just an simple JavaScript object. It is exported into the DAL to become a functional model

module.exports = function(mongoose) {

    var personSchema = {
        name: String,
        age: Number,
        nationality: String
    };

    return personSchema;
    // var Person = mongoose.model("Person", personSchema);
};