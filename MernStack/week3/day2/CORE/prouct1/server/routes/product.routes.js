const ProductControllers = require("../controller/products.controller")

console.log(ProductControllers)

module.exports = (app) => {

    app.post("/api/product", ProductControllers.createProduct)
    
}