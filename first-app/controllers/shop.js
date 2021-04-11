//Getting our product model
const Product = require('../models/product');


exports.getProducts = (req, res, next) => {
    //console.log(adminData.products);
    //handling responses the express way
    //with send, the request headers are set for us: e.g. Content-Type is text/html
    //sendFile() lets us send a file based on a string path
    //path has a method callled join() which we can use to build the paths
    //Nodejs has a global variable, __dirname, which is a global path from the root drive
    //__dirname is a path from the root drive, all the way down to the location of the file at hand
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));

    //Let's render the pug file results, using res.render()
    //Notice how we don't need to specify the path or extension
    //In app.js, using app.set(), we already did this

    //Getting our products.
    const products = Product.fetchAll((products) => {
        res.render('shop/product-list', {pageTitle: "All Products", prods: products, path: '/products'});
    });
    
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {pageTitle: "Your Cart", path: '/cart'});
}

exports.fetchProducts = (req, res, next) => {
    res.render('shop/product-detail', {pageTitle: "Products", path: '/products'});
}

exports.getIndex = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/index', {pageTitle: "Shop", prods: products, path: '/'});
    });
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {path: '/checkout', pageTitle: "Checkout"})
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {path: '/orders', pageTitle: "Orders"});
}

