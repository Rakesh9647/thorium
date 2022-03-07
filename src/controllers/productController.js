const productModel = require('../models/productModel'); 

const createProduct = async function (req, res){
    const data = req.body; 
    const dataRes = await productModel.create(data); 
    res.send({'msg': dataRes}); 
}

module.exports.createProduct = createProduct; 