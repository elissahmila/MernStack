const ProductControllers = require("../controller/product.controller")

console.log(ProductControllers)

module.exports = (app) => {

    app.post("/api/product", ProductControllers.createProduct)
    app.get("/api/product",ProductControllers.findALLProduct)
    app.get("/api/product",ProductControllers.findOneProduct)
    app.delete("/api/product/:id",ProductControllers.deleteProduct)
}

