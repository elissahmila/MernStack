const mongoose = require("mongoose")



const StoreSchema = new mongoose.Schema({

    StoreName: {
        type: String,
        required: [true, "  Store Name is required"],
        minlength: [3, "Store Name must be at least 3 characters long"]

    },
    StoreNumber: {
        type: Number,
        required: [true, "  Store Name is required"],
        min:[1]
       
        
    },
    Open: {
        type: Boolean,
        default: "false"

    },

}, { timestamps: true });

module.exports = mongoose.model("Store", StoreSchema)