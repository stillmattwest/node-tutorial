module.exports = function(mongoose) {

    var personSchema = {
        name: String,
        age: Number,
        nationality: String
    };

    return personSchema;
    // var Person = mongoose.model("Person", personSchema);
};