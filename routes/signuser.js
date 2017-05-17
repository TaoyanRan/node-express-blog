var express = require('express');
var router = express.Router();
var checkLogin = require('../middlewares/check').checkLogin;
var PostModel = require('../models/posts');


router.get('/',checkLogin,function (req,res,next) {
    var author = req.query.author;

    PostModel.getPosts(author)
        .then(function (posts) {
            res.render('user', {
                posts: posts
            });
        })
        .catch(next);


});

module.exports = router;