const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const postMessage = async function (req, res) {
    let message = req.body.msg; 
    let userToBeModified = req.params.userId
   // let userLoggedIn = decodedToken.userId
    //userId comparision to check if the logged-in user is requesting for their own data
    // if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

    let user = await userModel.findById(req.params.userId)
    if(!user) return res.send({status: false, msg: 'No such user exists'})
    
    // let updatedPosts = user.posts
    //add the message to user's posts
   // updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{msg: message}, {new: true})

    //return the updated user document
    return res.send({status: true, data: updatedUser})
};


module.exports.postMessage=postMessage;
