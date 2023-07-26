const mongoose = require("mongoose");

const userSchema = new Schema({
  id: { type: Number, require: true, unique: true },
  name: { type: String, require: true, unique: true },
  url: { type: String },
});

module.exports = mongoose.model("User", userSchema);
