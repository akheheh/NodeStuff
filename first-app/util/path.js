const path = require('path');
//process.main.filename is the path of the main file which calls the module
//In this case, it's the app.js file
//require.filename is the string path for the mainfile
//console.log(process.mainModule.filename);
module.exports = path.dirname(require.main.filename);