const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController");
const loginController =require("../controllers/loginController");
const getController=require("../controllers/getController");
const updateController=require("../controllers/updateController");
const deleteController=require("../controllers/deleteController");
const postsController=require("../controllers/postsController");
const middleware = require('../middleware/auth');

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/users", userController.createUser)

router.post("/login", loginController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",middleware.auth, getController.getUserData)

router.post("/users/:userId/posts",middleware.auth, postsController.postMessage)

router.put("/users/:userId",middleware.auth , updateController.updateUser)

router.delete('/users/:userId', middleware.auth, deleteController.userDelete);

module.exports = router;