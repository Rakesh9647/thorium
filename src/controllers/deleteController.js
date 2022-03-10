const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");



const userDelete =async function (req ,res){
  try{
    const userId =req.params.userId;

    if(!userId){
      res.status(404).send({msg: "Please input user ID"})
    }
    const dataRes =await userModel.findByIdAndUpdate(userId,{isDeleted :true},{new :true});
    res.status(200).send({'status':true, 'msg':dataRes});
  }
  catch(err){
    res.status(500).send({msg:"error",error:err.message})
  }
  };

  module.exports.userDelete=userDelete;