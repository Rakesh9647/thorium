const jwt = require("jsonwebtoken");

const auth =  function(req, res, next) {
    let userId = req.params.userId;
    let token = req.headers['x-auth-token'];
    if (!token) {
        res.send({'status': false,'msg': 'token must be present'});
    }
    const decodedToken = jwt.verify(token, 'functionup-thorium');
    if (!decodedToken)
        return res.send({status: false, msg: "token is invalid"});
    next();
}

module.exports.auth = auth; 