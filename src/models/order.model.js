const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    productId:{type:mongoose.Schema.Types.ObjectId,ref:"Product",required:true},
    brandId:{type:mongoose.Schema.Types.ObjectId,ref:"Brand",required:true},
    quantity:{type:Number,required:true},
    orderDate:{type:Date,default:Date.now},
    orderStatus:{type:String,default:"pending"},
    orderTotal:{type:Number,required:true}
}   ,{timestamps:true})



module.exports = mongoose.model("Order", OrderSchema)