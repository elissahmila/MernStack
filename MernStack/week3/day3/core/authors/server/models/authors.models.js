const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({

    
    Name: {
        type: String,
    required: [true, "name is required"],
    minLength: [3, "Name must be at least 3 characters"]

    },

}, { timestamps: true });

module.exports = mongoose.model("Author", AuthorSchema)