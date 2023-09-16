const {Product} = require("../models/product.models")
module.exports.createProduct = (req,res) =>{
 Product.create(req.body).then(newProduct=>{
        console.log("New product", newProduct)
        res.status(200).json(newProduct)
    }).catch(err=>{
        console.log(err)
        .catch(err => res.status(400).json({ message: "what are u doing!!!", error: err }))
    })
}
