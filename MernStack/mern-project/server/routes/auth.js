const router = require("express").Router();
const userController = require("../controller/user.controller")
const User = require("../models/user")
 
router.post("/register",userController.register);
router.post("/login", userController.login);



module.exports = router;  