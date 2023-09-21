const mongoose = require("mongoose");
const playersSchema = new mongoose.Schema(
  {
    full_name: {
      type: String,
      trim: true,
    },
    date_of_birth:{
      type:String,
      trim:true,
    },
    country: {
       type: String,
      trim: true,
    },
    role:{
        type:Array,
        trim:true,
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
const Players = mongoose.model("player", playersSchema);
module.exports = Players;
