const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        product_name:{
            type:String,
            trime:true,
        },
        product_price:{
            type:Number,
            trime:true,
        },
        product_decs:{
            type:String,
            trime:true,
        },
        is_active:{
            type:Boolean,
            trime:true,
        },
    },
    {
        timesstamps:true,
        versionKey:false,
    }
);

const product = mongoose.model('products',productSchema);

module.exports = product;