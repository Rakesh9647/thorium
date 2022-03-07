const orderSchema = require('../models/orderModel'); 
const userSchema = require('../models/userModel'); 
const productSchema = require('../models/productModel'); 

const createOrder = async function (req, res){
    const data = req.body; 
    const isFreeAppUser = req.headers.isfreeappuser; 

    const userRes = await userSchema.findById(data.userId); 
    if(userRes == null){
        return res.send({'msg': 'User does not exist !'}); 
    }

    const productRes = await productSchema.findById(data.productId); 
    if(productRes == null){
        return res.send({'msg': 'Product does not exist !'}); 
    }

    if(isFreeAppUser == "true"){
       data.amount = 0; 
       data.isFreeAppUser = true

       const dataRes = await orderSchema.create(data); 
       return res.send({'msg': dataRes }); 
    }
    else{
       const getProductPrice = await productSchema.findById(data.productId); 
       const userBalance = await userSchema.findById(data.userId); 

       if(userBalance.balance >= getProductPrice.price){
          const deductionRes = await userSchema.findByIdAndUpdate(data.userId, { $inc:{ balance: -getProductPrice.price }}, { new: true }); 
          data.amount = getProductPrice.price; 
          data.isFreeAppUser = false; 
          const storeOrder = await orderSchema.create(data); 
          return res.send({'msg': deductionRes }); 
       }
       else{
           return res.send({'msg': 'You do not have much balance'})
       } 

    }
    
}

module.exports.createOrder = createOrder; 