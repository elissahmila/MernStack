const {Product} = require("../models/product.models")

module.exports.createProduct = (req,res) =>{
 Product.create(req.body).then(newProduct=>{
        console.log("New product", newProduct)
        res.status(200).json(newProduct)
    }).catch(err=>{
        console.log(err)
        .catch(err => res.status(400).json({ message: "wait a minute what are u doing!!", error: err }))
    })
}

module.exports.findALLProduct = (req, res) => {
    
    Product.find()
        .then(allProduct => {
            

            res.json({ allProduct })
        })
        .catch(err => res.json({ message: "wait a minute what are u doing!!", error: err }))
}
