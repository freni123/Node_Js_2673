const mongoose = require('mongoose');

const mobileSchema = new  mongoose.Schema(
    {
        brand_name:{
            type:String,
            trim:true,
        },
        mobile_model:{
            type:String,
            trim:true,
        },
        storage:{
            type:String,
            trim:true,
        },
        dispaly_size:{
            type:String,
            trime:true,
        },
        color:{
            type:String,
            trim:true,
        },
        camera_resolution:{
            type:String,
            trim:true,
        },
        release_date:{
            type:String,
            trim:true,
        },
        price:{
            type:Number,
        },
        is_active:{
            type:Boolean,
            default:true,
        },
    },
    {
        timestamps:true,
        versionKey:false,
    }
);
const mobile = mongoose.model('mobile',mobileSchema);
module.exports = mobile;
