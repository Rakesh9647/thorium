const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");



const getUserData = async function (req, res) {
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
      return res.send({ status: false, msg: "No such user exists" });
  
    res.send({ status: true, data: userDetails });
  };

  module.exports.getUserData=getUserData;