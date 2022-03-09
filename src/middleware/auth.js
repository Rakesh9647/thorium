// const jwt = require("jsonwebtoken");

// const auth =  function(req, res, next) {
//     let userId = req.params.userId;
//     let token = req.headers['x-auth-token'];
//     if (!token) {
//         res.send({'status': false,'msg': 'token must be present'});
//     }
//     const decodedToken = jwt.verify(token, 'functionup-thorium');
//     if (!decodedToken)
//         return res.send({status: false, msg: "token is invalid"});
//     next();
// };
// const authorization =async function (req,res,next){
//     let token =req.headers['x-auth-token']
//     let decodedToken=jwt.verify(token,"functionup-thorium");
//     if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
//     if (!decodedToken)
//     return res.send({status: false, msg: "token is invalid"});
// next();
// };

// module.exports.authorization=authorization



// module.exports.auth = auth; 



const jwt = require("jsonwebtoken");

const auth = (request, response, next) => {
    const userId = request.params.userId;
    const token = request.headers['x-auth-token'];
    if (!token) {
        response.send({
            'status': false,
            'msg': 'token must be present'
        });
    }
    const decodedToken = jwt.verify(token, 'functionup-thorium');
    if (!decodedToken){
        return response.send({
            status: false,
            msg: "token is invalid"
        });
    }
    else{
        if(decodedToken.userId != userId){
            return response.send({
                status: false,
                msg: "User not authorized !"
            });
        }
        next();
    }
}


module.exports.auth = auth;