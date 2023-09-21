const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);
const token = mongoose.model("token", tokenSchema);
module.exports = token;
