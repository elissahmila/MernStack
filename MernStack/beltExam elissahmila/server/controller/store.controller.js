const Store = require("../models/store.models");

module.exports.findALLStore = (req, res) => {
   Store.find()
        .then(allStore => {
            res.json(allStore)
        })
        .catch(err => res.json(err))
}
module.exports.makeStore = (req, res) => {
    Store.create(req.body)
        .then(newStore => {
            res.status(200).json(newStore)
        })
        .catch(err => res.status(400).json(err))
}
module.exports.findOneStore = (req, res) => {

    Store.findById(req.params.id)
        .then(oneStore => res.status(200).json(oneStore)
        ).catch(err => { res.status(400).json(err) })
}
module.exports.updateOneStore = (req, res) => {
    Store.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedStore => { res.json(updatedStore) })
        .catch(err => { res.json(err) })
}
module.exports.deleteStore = (req, res) => {
    Store.findByIdAndDelete(req.params.id)
        .then(result => { res.json(result) })
        .catch(err => { res.json(err) })


}