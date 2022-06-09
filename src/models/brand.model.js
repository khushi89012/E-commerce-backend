const mongoose = require("mongoose")

const BrandSchema = new mongoose.Schema({
    brandName: {
        type: String,
        required: true,
        unique: true
    },
    brandDescription: {
        type: String,
        required: true
    },
    brandImage: {
        type: String,

    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,ref:"Product",
        required:true
    }


})

module.exports = mongoose.model("Brand", BrandSchema)