const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  favorites: {
    type: Array
  }
});

//name if module is the singular of how the database is called
module.exports = mongoose.model("user", userSchema);
