const mongoose = require("mongoose");
const matchesSchema = new mongoose.Schema(
  {
    match_date: {
      type: String,
    },
    venue: {
      type: String,
      trim: true,
    },
    match_time: {
      type: String,
    },
    team:{
      type:mongoose.Types.ObjectId,
      ref:"team",
    },
    matchResult:{
      type:mongoose.Types.ObjectId,
      ref:"matchResult",
    },
    is_active:{
        type:Boolean,
        default:true,
    }
  },
  {
    timestamps: true,
  }
);
const matches = mongoose.model("match", matchesSchema);
module.exports = matches;
