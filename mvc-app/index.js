const express = require('express');
const path = require('path');
const pug = require('pug');
const app = express();
const data = [];
app.use(express.urlencoded({extended: true}));
//Setting up our templating engine
app.set('view-engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.post('/added', (req, res, next) => {

    const name = req.body.itemName;
    const price = req.body.itemPrice;
    let newDatum = {name, price};
    if(newDatum) {
        data.push(newDatum);
        res.redirect(302, '/');
        
    }
    
    newDatum = null;
    
    
})
app.use('/', (req, res, next) => {
    console.log(data)
    res.render(path.join(__dirname, 'public', 'index.pug'), {pageTitle: "First Page", data: data});
}).listen(3000);