'use strict';

// Schema from mongoose package;
const mongoose = require('mongoose');
const clothesSchema = mongoose.Schema({
    name : {type: String, required: true},
    type: {type: String, required: true }
});
// a schema is the structure of my object in this collection
// a model is a wrapper for the schema
const clothesModel = mongoose.model('clothes', clothesSchema);
module.exports = clothesModel;