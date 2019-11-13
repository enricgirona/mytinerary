const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  hashtags: {
    type: Array,
    required: true
  }
});

module.exports = mongoose.model("itinerary", itinerarySchema);
