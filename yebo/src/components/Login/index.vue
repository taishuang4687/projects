<template>
    <div class='login-content'>
        <div>
            <input class='login-text' type="text" placeholder="请输入账户名/手机号/email">
        </div>
        <div>
            <input class='login-text' type="password" placeholder="请输入密码">
        </div>
        <div class='login-btn'>
            <input type="submit" value="登录">
        </div>
        <div class='login-link'>
            <a href="#">立即注册</a>
            <a href="#">找回密码</a>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.login-content{
    width: 100%;
    margin-top: 50px;
}
.login-content .login-text{
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: 1px solid #ccc;
    margin-bottom: 5px;
    text-indent: 10px;
    outline: none;
}
.login-content .login-btn{
    height: 50px;
    margin: 10px;
}
.login-content .login-btn input{
    width: 100%;
    height: 100%;
    background: #ff0036;
    border-radius: 5px;
    border: none;
    display: block;
    color: #fff;
}
.login-content .login-link{
    display: flex;
    justify-content: space-between;
}
.login-content .login-link a{
    text-decoration: none;
    margin:0 5px;
    font-size: 12px;
    color: #ff0036;
}
</style>