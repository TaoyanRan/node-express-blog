var express = require('express');
var router = express.Router();

var checkLogin = require('../middlewares/check').checkLogin;

// GET /signout 登出
router.get('/', checkLogin, function(req, res, next) {
    var outUserName = req.session.user;
    // 清空 session 中用户信息
    req.session.user = null;
    req.flash('success','用户 '+outUserName.name+' 登出成功');
    // 登出成功后跳转到主页
    res.redirect('/posts');
});

module.exports = router;