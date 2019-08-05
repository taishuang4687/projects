var UserModel = require('../models/users.js');
var login = async(req,res,next)=>{
    var {username,password} = req.body;
    var result = await UserModel.findLogin({
        username,
        password
    });
    if(result){
        //存入内存之中
        req.session.username = username;
        req.session.password = password;
        res.send({
            msg:'登录成功',
            status:0
        });
    }else{
        res.send({
            msg:'登录失败',
            status:-1
        });
    }
};
var register = async(req,res,next)=>{
    var {username,password} = req.body;
    var result = await UserModel.save({
        username,
        password
    });
    if(result){
        res.send({
            msg:'注册成功',
            status:0
        });
    }else{
        res.send({
            msg:'注册失败',
            status:-1
        });
    }
};
var verify = async(req,res,next)=>{
    res.send({
        msg:'测试',
        status:0
    });
};
var logout = async(req,res,next)=>{
    req.session.username = '';
    res.send({
        msg:'退出成功',
        status:0
    });
};
var getUser = async(req,res,next)=>{
    if(req.session.username){
        res.send({
            msg:'获取用户信息成功',
            status:0,
            data:{
                username:req.session.username
            }
        });
    }else{
        res.send({
            msg:'获取用户信息失败',
            status:-1
        })
    }
};
var findPassword = async(req,res,next)=>{
    var {username,password,newpassword} = req.body;
    if(username===req.session.username&&password===req.session.password){
        var result = await UserModel.updatePassword(username,newpassword);
        if(result){
            res.send({
                msg:'修改密码成功',
                status:0
            });
        }else{
            res.send({
                msg:'修改密码失败',
                status:-1
            });
    }
    }else{
        res.send({
            msg:'密码错误',
            status:-1
        })
    }
};
module.exports = {
    login,
    register,
    verify,
    logout,
    getUser,
    findPassword
};