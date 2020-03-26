const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tripSchema = new Schema({
    country: String,
    city: String,
    date: Date,
    file: String,
    summary: String,
    rating: String
  });

const tripModel = mongoose.model("Trip", tripSchema);

module.exports = tripModel;