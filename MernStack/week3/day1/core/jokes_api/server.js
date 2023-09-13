const express = require("express");
const app = express();

app.use(express.json(), express.urlencoded({extended: true}))
require("dotenv").config()
require("./config/mongoose.config")
require("./routes/joke.routes")(app)
const port = process.env.PORT


app.listen(port, () => {
    console.log(`>>>>> Server is running on port ${port}`)
})
