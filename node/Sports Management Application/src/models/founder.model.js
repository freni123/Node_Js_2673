const mongoose = require("mongoose");

const founderSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      trim: true,
    },
    last_name: {
      type: String,
      trim: true,
    },
    age: {
      type: Number,
    },
    sportsInterested: {
      type: String,
      trim: true,
    },
    foundedTeams_name: {
      type: String,
      trim: true,
    },
    team:{
      type:mongoose.Types.ObjectId,
      ref:"team",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const Foundr = mongoose.model("founder", founderSchema);
module.exports = Foundr;
