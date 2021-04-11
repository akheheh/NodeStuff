exports.error404 = (req, res, next) => {
    //we can chain methods between res and send
    //res.status(404).send('<h1>404 Page not found.</h1>')
    //res.status(404).sendFile(path.join(__dirname, 'views', 'error404.html'));
    res.status(404).render('error404', {pageTitle: "Page Not Found"});
}