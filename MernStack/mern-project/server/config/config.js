// const mongoose = require("mongoose");

// const config = async (req,res) => {
//     try {
//             await mongoose
//               .connect(
//                 "mongodb+srv://user:mern_project123@cluster0.hyfao2g.mongodb.net/"
//               )
//               .then(() => {
//                 console.log("test");
//                 console.log("connected to database!!!!!");
//               }); 
//     } catch (error) {
//         console.log("osos"); 
//         res.status(400).json({         
//             message:"not found"
//         })
        
//     }
// }
// config();

const mongoose = require("mongoose");

const DB = "mern_project"

const config = async (req, res) => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/" + DB).then(() => {
      console.log("test");
      console.log("connected to database!!!!!");
    });
  } catch (error) {
    console.log("osos");
    res.status(400).json({
      message: "not found",
    });
  }
};
config();

