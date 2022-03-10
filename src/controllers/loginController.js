const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const loginUser = async function (req, res) {
  try{
   let userName = req.body.emailId;
    let password = req.body.password;
    
     if( Object.keys(data).length !=0){
       res.status(400).send({msg:"Please input username and password"})
    }


    if(!userName||!password){
      res.status(400).send({msg:"Please input username and password"})
    }
   let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.status(400).send({
        status: false,
        msg: "username or the password is not corerct",
      });
  
    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "thorium",
        organisation: "FUnctionUp",
      },
      "functionup-thorium"
    );
    res.setHeader("x-auth-token", token);
    res.status(200).send({ status: true, data: token });
  }
  catch(err){
    console.log("This is the error:" , err.message)
    return res.status(500).send({msg:"error",error:err.message})
  }

  };

  module.exports.loginUser=loginUser;