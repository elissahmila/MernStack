const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");


const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      unique: [true, "Email already exists"],
      validate: {
        validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a valid email",
      },
    },
    userName: {
      type: String,
      required: [true, "Email is required"],
      minlength: [3, "{PATH} must be at least 3 chars"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    list: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "List",
      },
    ],
  },
  { timestamps: true }
);



module.exports = mongoose.model("User", userSchema )