const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");



const getUserData = async function (req, res) {
  try{
    let userId = req.params.userId;
    if(!userId){
      return res.status(400).send({msg:"please input user ID."})
    }
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
      return res.status(404).send({ status: false, msg: "No such user exists" });
  
    res.status(200).send({ status: true, data: userDetails });
  }
  catch(err){
    console.log("This is the error." ,err.message)
    res.status(500).send({msg:"error",error:err.message})
  }
  };

  module.exports.getUserData=getUserData;