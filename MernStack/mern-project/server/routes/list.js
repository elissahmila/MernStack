const router = require("express").Router();
const User = require("../models/user")
const List = require("../models/list");
const listController = require("../controller/list.controller")

router.post("/addTask", listController.addTask)
router.put("/updateTask/:id", listController.updateTask);
router.delete("/deleteTask/:id", listController.deleteTask); 
router.get("/getTasks/:id", listController.getTasks);



 
module.exports = router;