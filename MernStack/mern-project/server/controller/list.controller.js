const router = require("express");
const User = require("../models/user");
const List = require("../models/list");

module.exports = {
  addTask: async (req, res) => {
    try {
      const { title, body, id } = req.body;
      const existingUser = await User.findById(id)
      if (existingUser) {
        const list = new List({ title, body, user: existingUser });
        await list.save().then(() => res.status(200).json({ list }));
        existingUser.list.push(list);
        existingUser.save();
      }
    } catch (error) {
      console.log({ error });
    }
  },

  updateTask: async (req, res) => {
    try {

  const {title,body} = req.body;
        const list = await List.findByIdAndUpdate(req.params.id, {
          title,
          body,
        });
        list
          .save()
          .then(() => res.status(200).json({ message: "task updated" }));
      
    } catch (error) {
      res.status(400).json({error: err.message});
    }
  },

  deleteTask: async (req, res) => {
    try {
      const { id } = req.body;
      const existingUser = await User.findByIdAndUpdate(
        id,
        { $pull: { list: req.params.id } }
      );
      if (existingUser) {
        const list = await List.findByIdAndDelete(req.params.id).then(() =>
          res.status(200).json({ message: "task deleted" })
        );
      }
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  getTasks: async (req, res) => {
    try {
      const list = await List.find({ user: req.params.id }).sort({createdat: -1})
      console.log({ list });
      res.json({ list });
      if (list.length !== 0){
        res.status(200).json({list:list})
      }
      else{
        res.status(200).json({message:"no task"})
      }
    } catch (err) {
    }
  },
}; 