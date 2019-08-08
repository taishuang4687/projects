var express = require('express');
var usersController = require('../controllers/users.js');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login',usersController.login);//登录
router.post('/register',usersController.register);//注册
router.get('/verify',usersController.verify);
router.get('/logout',usersController.logout);//登出
router.get('/getUser',usersController.getUser);//获取用户信息
router.post('/findPassword',usersController.findPassword);//重置密码


module.exports = router;
