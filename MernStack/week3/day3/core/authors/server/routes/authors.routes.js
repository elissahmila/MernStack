const authorController = require("../controller/authors.controller");

module.exports = (app) => {
    app.get("/api/author", authorController.findALLAuthor)
    app.post("/api/author", authorController.makeAuthor)
    app.get("/api/author/:id", authorController.findOneAuthor)
    app.put("/api/author/:id", authorController.updateOneAuthor)
    app.delete("/api/author/:id", authorController.deleteAuthor)
}