const express = require('express');
const path = require('path');

//creating an express application
const app = express();

//Setting up our templating engine
//use app.set(name, value), and app.get('name') to USE the value
app.set('view engine', 'pug');
//The below line is WHERE our views are
app.set('views', 'views');
//Importing the admin routes
const adminRoutes = require('./routes/admin');


//Importing the shop route(s)
const shopRoutes = require('./routes/shop');
//let's import body-parser

const errorController = require('./controllers/error');
const bodyParser = require('body-parser');
//middleware for parsing body from request (req.body)
//The middleware is the urlencoded() method from the bodyParser module
//pass in the object with the extended property as true (runtime response)
//Setting extended to true will fix the [Object: null prototype] issue
app.use(bodyParser.urlencoded({extended: true}));
//serving files statically—aka getting the CSS files
//We do this using express's built in static() method, passing in a string path
//Here, we join our __dirname with our public directory
app.use(express.static(path.join(__dirname, 'public')));

//the use() method lets us use middleware functions to handle requests
//next is a callback to move to the next part of the process

//Using the adminRoutes
//Filtering routes—now only routes starting with /admin will go through adminRoutes
app.use('/admin', adminRoutes);

//Using the shopRoutes.  Note: No path is passed in, so by default this is our root.
app.use(shopRoutes);

//Handling 404 errors
//Use the 'use' method as a catch all for any undefined route
app.use(errorController.error404);
//Express lets us use a shorthand to listen to a port
app.listen(3000);
