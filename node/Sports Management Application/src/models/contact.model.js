const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema(
  {
    full_name: {
      type: String,
      trim: true,
    },
    email:{
      type:String,
      trim:true,
    },
    message:{
        type:String,
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
const Contact = mongoose.model("contact", contactSchema);
module.exports = Contact;
