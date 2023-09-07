const express = require("express");
const PORT = 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

const bulbasaurData = {
  name: "Bulbasaur",
  type: "Grass/Poison",
  abilities: ["Overgrow"],
  
};

const pokemon = [bulbasaurData];

app.get("/api", (req, res) => {
  res.send("OUR POKEMON FILE");
});

app.get("/api/pokemon", (req, res) => {
  res.json(pokemon);
});
app.post("/api/newPokemon",(req,res)=>{
    console.log(req.body)
    pokemon.push(req.body)
    res.json({status:"you new pokeemon UwU"})
})

const server = app.listen(PORT, () => {
  console.log(`Server is locked and loaded on port: ${PORT}`);
});
