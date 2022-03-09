const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");



const userDelete =async function (req ,res){
    const userId =req.params.userId;
    const dataRes =await userModel.findByIdAndUpdate(userId,{isDeleted :true},{new :true});
    res.send({'status':true, 'msg':dataRes});
  };

  module.exports.userDelete=userDelete;