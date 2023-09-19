const Author = require("../models/authors.models");

module.exports.findALLAuthor = (req, res) => {
    Author.find()
        .then(allAuthor => {
            res.json(allAuthor)
        })
        .catch(err => res.json(err))
}
module.exports.makeAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => {
            res.status(200).json(newAuthor)
        })
        .catch(err => res.status(400).json(err))
}

module.exports.findOneAuthor = (req, res) => {

    Author.findById(req.params.id)
        .then(oneAuthor => res.status(200).json(oneAuthor)
        ).catch(err => { res.status(400).json(err) })
}
module.exports.updateOneAuthor = (req, res) => {
    Author.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuthor => { res.json(updatedAuthor) })
        .catch(err => { res.json(err) })
}

module.exports.deleteAuthor = (req, res) => {
    Author.findByIdAndDelete(req.params.id)
        .then(result => { res.json(result) })
        .catch(err => { res.json(err) })


}
