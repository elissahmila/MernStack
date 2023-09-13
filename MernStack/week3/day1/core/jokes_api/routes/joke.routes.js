const JokeControllers = require("../controller/joke.controller")

module.exports = (app) =>{
    app.get("/api/allJoke",JokeControllers.findAlljokes)
    app.post("/api/createJoke", JokeControllers.createNewJoke)
    app.get("/api/jokes/:_id", JokeControllers.findOneJoke);
    app.put("/api/jokes/:_id", JokeControllers.updateJoke);
    app.delete("/api/jokes/:_id", JokeControllers.deleteJoke);
}
   
