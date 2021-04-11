//Getting our product model
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    //res.send('<form action = "/admin/add-product" method = "POST"><input type = "text" name = "title"><button type = "submit">Add Product</button></form>');
    //res.sendFile(path.join(rootDir, 'views', 'add-product.pug'));
    res.render('add-product', {
        pageTitle: 'Add Product', 
        path: '/admin/add-product'
    });
}

exports.postAddProduct = (req, res, next) => {
    //we need to parse req.body, using another middleware
    //The value of req.body is an object with our data as properties
    console.log(req.body);
    //This will create a new product using our Product model.
    const product = new Product(req.body.title);
    //This will add our product to our list (which will be a database of some sort)
    product.save();
    //Let's redirect the response, using res.redirect()
    //Much easier than using res.writeHead(302, {'Location': '/path'})
    res.redirect('/');
}

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
        res.render('shop', {pageTitle: "Shop", prods: products, path: '/'});
    });
    
}