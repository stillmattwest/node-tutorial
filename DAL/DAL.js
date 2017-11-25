// This is the data access layer. It provides connectivity to the database and aggregates models into a single export. This is how the app should interact with models.

// connect to database
const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tutorial_db');

// define models
let Person = new mongoose.Schema(require('../models/person.js')(mongoose));

// set models for export
let models = {
    Person: mongoose.model('Person',Person)
};

module.exports = models;