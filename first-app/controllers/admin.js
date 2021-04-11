const Product = require('../models/product');


exports.getAddProduct = (req, res, next) => {
    //res.send('<form action = "/admin/add-product" method = "POST"><input type = "text" name = "title"><button type = "submit">Add Product</button></form>');
    //res.sendFile(path.join(rootDir, 'views', 'add-product.pug'));
    res.render('admin/add-product', {
        pageTitle: 'Add Product', 
        path: '/admin/add-product'
    });
}

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = req.body.price;
    //we need to parse req.body, using another middleware
    //The value of req.body is an object with our data as properties
    console.log(req.body);
    //This will create a new product using our Product model.
    const product = new Product(title, imageUrl, price, description);
    //This will add our product to our list (which will be a database of some sort)
    product.save();
    //Let's redirect the response, using res.redirect()
    //Much easier than using res.writeHead(302, {'Location': '/path'})
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('admin/products', {pageTitle: "Admin Products", prods: products, path: '/admin/products'});
    });
}
