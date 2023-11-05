const { message } = require("statuses");
const User = require("../models/user")
const bcrypt = require("bcrypt")
module.exports = {
  //sign up
  register: async (req, res) => {
    try {
      const { email, userName, password } = req.body;
      if (!password) {
        return res.status(400).json({ error: "Password is required" });
      }

      const hashpassword = await bcrypt.hash(password, 10);

      const user = new User({ email, userName, password: hashpassword });
      await user.save();
      res.status(200).json({ message: "Sign Up Successful" });
    } catch (err) {
      res.status(200).json({ message: "User Already Exists" });
    }
  },

  login: async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        res.status(400).json({ message: "please sign up first " });
      } 
      const ispasswordcorrect = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!ispasswordcorrect) {
        res.status(200).json({ message: "password is not correct " });
      }
      const { password, ...others } = user._doc;
      res.status(200).json({ others });
    } catch (error) {
      res.status(200).json({ message: "error" });
    }
  },
  //sign in
};