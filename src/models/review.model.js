const mongoose = require("mongoose")

const ReviewSchema = new mongoose.Schema({
    userId : {
       type:mongoose.Schema.Types.ObjectId,
       ref:"User",
       required:true,
    },
    productId : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },
    rating : {
        type:Number,
        required:true
    }
} ,{timestamps:true})


module.exports = mongoose.model("Review", ReviewSchema)