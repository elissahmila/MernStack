const storeController = require("../controller/store.controller");

module.exports = (app) => {
    app.get("/api/store", storeController.findALLStore)
    app.post("/api/store", storeController.makeStore)
    app.get("/api/store/:id", storeController.findOneStore)
    app.put("/api/store/:id", storeController.updateOneStore)
    app.delete("/api/store/:id", storeController.deleteStore)
}
