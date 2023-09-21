const { config } = require("dotenv");
const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema(
  {
    // title: {
    //   type: String,
    //   trim: true,
    // },
    // description: {
    //   type: String,
    //   trim: true,
    // },
    image: {
      type: String,
    },
    // author_name: {
    //   type: String,
    //   trim: true,
    // },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON:{
      transform:function(doc,data){
        if(data?.image){
          data.image =`${config.base_url}gallery_images/${data.image}`;
        }
      },
    },
  }
);
const Gallery = mongoose.model("gallery", gallerySchema);
module.exports = Gallery;
