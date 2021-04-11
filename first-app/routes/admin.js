//routes for admin
const express = require('express');
const path = require('path');
//We can use the path module we made to cleanly send the path
const rootDir = require('../util/path');

//Getting add-product controllers
const adminController = require('../controllers/admin');
//Creating an Express router
const router = express.Router();



//Middlewares are accessed in order
//As a rule, we order our middlewares by path specificty, from the most specific path
//to least specific.  This means the middleware for the root path (/) will be last.
router.get('/add-product', adminController.getAddProduct);

//Let's create the route, and a middleware to handle the form inputs
//NOTE: We can place this before or after /add-product.  They're of equal specificity
//express App has method-specific functions for handling middlewares
//app.post will only work for POST
router.post('/add-product', adminController.postAddProduct);
router.get('/products', adminController.getProducts);
//exporting routes
//module.exports = router;

//exporting multiple containers
//exports.routes = router;
module.exports = router;
//products is in the products controller, so no need to export
//exports.products = products;