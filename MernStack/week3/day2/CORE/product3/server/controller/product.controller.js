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
module.exports.findOneProduct = (req, res) => {
    
    Product.findOne({ _id: req.params.id })
        .then(oneProduct => res.status(200).json({
            oneProduct
        })
        ).catch(err =>  res.status(400).json({ message: "wait a minute what are u doing!!", error: err }))
}
module.exports.updateOneProduct = (req, res) => {
    Product.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => { res.json({ updatedProduct }) })
        .catch(err => { res.json({ message: "wait a minute what are u doing!!", error: err }) })
}


module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => { res.json({ result }) })
        .catch(err => { res.json({ message: "wait a minute what are u doing!!", error: err }) })


}
