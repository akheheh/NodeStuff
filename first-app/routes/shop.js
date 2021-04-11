//The paths module helps us build paths to ensure our desired files are served regardless of OS
const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();
const shopController = require('../controllers/shop');

//The shop routes
//use() has overloads, so we can basically use the use() for different things (REMEMBER OVERLOADING!)
//In this overloading instance, we're handling what goes on in the root
router.get('/', shopController.getIndex);
router.get('/cart', shopController.getCart);
router.get('/products', shopController.getProducts);
router.get('/checkout');
router.get('/orders', shopController.getOrders);

module.exports = router;