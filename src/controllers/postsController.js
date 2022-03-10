const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const postMessage = async function (req, res) {
    try{
    let message = req.body.msg; 
  //  let userToBeModified = req.params.userId
  if(!message){
      return res.status(400).send({msg: "please add message",})
  }
    let user = await userModel.findById(req.params.userId)
    if(!user) return res.status(404).send({status: false, msg: 'No such user exists'})
  
    let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{msg: message}, {new: true})

    //return the updated user document
    return res.status(200).send({status: true, data: updatedUser})

}
catch(err){
    res.status.send({msg: "error",error: err.message})
}
};


module.exports.postMessage=postMessage;
