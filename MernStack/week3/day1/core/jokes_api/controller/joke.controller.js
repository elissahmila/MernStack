const {Joke} = require("../models/joke.model")
 

module.exports.findAllJokes = (req,res) => {
    Joke.find()
    .then(allJoke =>{
        res.json({allJoke})
    })
    .catch(err=>{res.json({message: "aint noo waay !!"})})
}

module.exports.createNewJoke = (req,res) => {
    Joke.create(req.body)
    .then(allJoke =>{
        res.json({createJoke})
    })
    .catch(err=>{res.json({message: "aint noo waay !!"})})
}
module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params._id })
        .then(foundJoke => {
            if (!foundJoke) {
                return res.json({ message: "Joke not found" });
            }
            res.json({ joke: foundJoke });
        })
        .catch(err => {
            res.json({ message: "There was an error finding the joke." });
        });
}
module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params._id }, req.body, {
        new: true,
        runValidators: true,
    })
    .then(updatedJoke => {
        if (!updatedJoke) {
            return res.json({ message: "Joke not found" });
        }
        res.json({ joke: updatedJoke });
    })
    .catch(err => {
        res.json({ message: "There was an error updating the joke." });
    });
}
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params._id })
        .then(result => {
            if (result.deletedCount === 0) {
                return res.json({ message: "Joke not found" });
            }
            res.json({ message: "Joke deleted successfully" });
        })
        .catch(err => {
            res.json({ message: "There was an error deleting the joke." });
        });
};
