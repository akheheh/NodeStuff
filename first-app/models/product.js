//Model for a single product
const products = [];
//Next, we want to save and load products from a file.
const fs = require('fs');
const path = require('path');
const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
const getProductsFromFile = (cb) => {
        //Reading our products file
        fs.readFile(p, (err, fileContent) => {
            if(err) {
                return cb([]);
            }
            cb(JSON.parse(fileContent));
        });
}
module.exports = class Product {
    constructor(title, imageUrl, price, description) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {
        //This will add the product instance to the array
        //products.push(this);
        getProductsFromFile(products => {
            //Once it's parsed, push the product into our array (this refers to the class, therefore instance of)
            products.push(this);
            //Finally, we need to write this to the file
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
        });
        
        fs.readFile(p, (err, fileContent) => {
            
            });
        });
    }

    //This method is to get all products in our product list
    /*
    Static methods can be called on the class itself.
    You don't need to create an instance of it to use them.
    Look, do we really want to create another object just to use one method?
    No.
    */
    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
} 