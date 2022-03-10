const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");



const updateUser = async function (req, res) {
  try{
     let userId = req.params.userId;
     if(!userId){
       return res.status(400).send({msg:"Please input user Id ."})
     }
    let user = await userModel.findById(userId);
    if (!user) {
      return res.status(400).send("No such user exists");
    }
    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({_id: userId} , userData,{new:true});
    res.status(200).send({ status: true, data: updatedUser });

  }
  catch(err){
    res.status(500).send({msg:"error" , error:err.message})
  }
  
  };
  module.exports.updateUser=updateUser;

  // findOneAndUpdate({ _id: userId}, )