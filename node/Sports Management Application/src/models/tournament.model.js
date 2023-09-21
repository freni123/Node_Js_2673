const mongoose = require("mongoose");
const tournamentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    location: {
      type: String,
      trim: true,
    },
    match:{
      type:mongoose.Types.ObjectId,
      ref:"match",
    },
    start_date: {
      type: String,
    },
    end_date: {
      type: String,
    },
    is_active: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
const Tournament = mongoose.model("tournament", tournamentSchema);
module.exports = Tournament;
