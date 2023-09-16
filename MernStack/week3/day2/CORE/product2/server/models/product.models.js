const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    productTitle: {
        type: String
    },
    price: {
        type: Number
    },
    descreption:{
        type: String
    }
},{timestamps: true})
module.exports.Product = mongoose.model("Product",ProductSchema)
