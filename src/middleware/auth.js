
const jwt = require("jsonwebtoken");

const auth = (request, response, next) => {

    try{
    const userId = request.params.userId;
    if(!userId){
        return response.status(401).send("please input user ID")
    }
    const token = request.headers['x-auth-token'];
    if (!token) {
        response.status(401).send({
            'status': false,
            'msg': 'token must be present'
        });
    }
    const decodedToken = jwt.verify(token, 'functionup-thorium');
    if (!decodedToken){
        return response.status(404).send({
            status: false,
            msg: "token is invalid"
        });
    }
    else{
        if(decodedToken.userId != userId){
            return response.status(401).send({
                status: false,
                msg: "User not authorized !"
            });
        }
        next();
    }
}

    catch(err){
        response.status(500).send({msg:"error", error: err.messaage})
    
    }
}




module.exports.auth = auth;