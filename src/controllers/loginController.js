const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const loginUser = async function (req, res) {
    let userName = req.body.emailId;
    let password = req.body.password;
   let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.send({
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
    res.send({ status: true, data: token });

  };

  module.exports.loginUser=loginUser;