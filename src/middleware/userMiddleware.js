const checkHeader = function (req, res, next){
    if(req.headers.isfreeappuser != undefined){
        next();
    } 
    else{
        res.send({'msg': 'The request is missing a mandatory header !' }); 
    } 
}

const updateHeader =  function (req, res, next){
    req.headers.isFreeAppUser = true; 
    next(); 
}

module.exports.checkHeader = checkHeader; 
module.exports.updateHeader = updateHeader; 