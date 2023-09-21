const mongoose = require("mongoose");
const matchResultSchema = new mongoose.Schema(
  {
    match:{
        type:mongoose.Types.ObjectId,
        ref:"match",
    },
    contact:{
        type:mongoose.Types.ObjectId,
        ref:"contact",
    },
    prize:{
        type:Number,
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
const matchResult = mongoose.model("matchResult", matchResultSchema);
module.exports = matchResult;
