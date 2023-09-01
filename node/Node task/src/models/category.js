const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
    {
        category_name:{
            type:String,
            trim:true,
        },
        category_desc:{
            type:String,
            trim:true,
        },
        is_active:{
            type:Boolean,
            default:true,
        }
    },
    {
        timesstamps:true,
        versionKey:false,
    }
);

const category = mongoose.model('categorys',categorySchema);

module.exports = category;