const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try{
   let data = req.body;
   if( Object.keys(data).length !=0){
    let savedData = await userModel.create(data);
    res.status(201).send({ msg: savedData });
   }
   else res.status(400).send({msg:"Bad request."})

  }
  catch(err){
    console.log("This is the error:",err.message)
    res.status(500).send({msg: "error",error:err.message})
  }

};

module.exports.createUser = createUser;

