const mongoose = require("mongoose");
const teamSchema = new mongoose.Schema(
  {
    team_name: {
      type: String,
      trim: true,
    },
    country:{
      type:String,
      trim:true,
    },
    player:{
      type:mongoose.Types.ObjectId,
      ref:"player",
    },
    user:{
      type:mongoose.Types.ObjectId,
      ref:"user",
    },
    coach: {
      type: String,
    },
    is_active:{
      type:Boolean,
      default:true,
    },
  },
  {
    timestamps: true,
  }
);
const Team = mongoose.model("team", teamSchema);
module.exports = Team;
