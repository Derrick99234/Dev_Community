const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: { type: String },
    displayName: { type: String, require: true },
    username: { type: String, require: true },
    password: { type: String, require: true },
    photoURL: { type: String, default: "" },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
