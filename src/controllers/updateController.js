const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");



const updateUser = async function (req, res) {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    if (!user) {
      return res.send("No such user exists");
    }
    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({_id: userId} , userData,{new:true});
    res.send({ status: true, data: updatedUser });
  
  };
  module.exports.updateUser=updateUser;

  // findOneAndUpdate({ _id: userId}, )