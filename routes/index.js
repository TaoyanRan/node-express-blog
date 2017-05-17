module.exports = function (app) {
    app.get('/', function (req, res) {
        res.redirect('/posts');
    });
    app.use('/signup', require('./signup'));
    app.use('/signin', require('./signin'));
    app.use('/signout', require('./signout'));
    app.use('/signuser', require('./signuser'));
    app.use('/bootstrap', require('./bootstrap'));
    app.use('/posts', require('./posts'));
    app.use('/test/:id', function(req, res){
        res.send('user ' + req.params.id);
    });
    // 404 page
    app.use(function (req, res) {
        if (!res.headersSent) {
            res.status(404).render('404');
        }
    });
};