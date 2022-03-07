const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController'); 
const userController = require('../controllers/userController'); 
const orderController = require('../controllers/orderController'); 

const userMiddleware = require('../middleware/userMiddleware'); 

router.post('/createProduct', productController.createProduct); 

router.post('/createUser', userMiddleware.checkHeader, userController.createUser); 

router.post('/createOrder', userMiddleware.checkHeader, orderController.createOrder); 

router.put('/updateStatus', userMiddleware.updateHeader, userController.updateStatus); 



module.exports = router;