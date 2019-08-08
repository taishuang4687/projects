<template>
    <div class='login-content'>
        <div>
            <input v-model='username' class='login-text' type="text" placeholder="请输入账户名/手机号/email">
        </div>
        <div>
            <input v-model='password' class='login-text' type="password" placeholder="请输入密码">
        </div>
        <div class='login-btn'>
            <input @touchstart='handleToLogin' type="submit" value="登录">
        </div>
        <div class='login-link'>
            <router-link to='/mine/register'>立即注册</router-link>
            <router-link to='/mine/findPassword'>找回密码</router-link>
        </div>
    </div>
</template>

<script>
import {box} from '@/components/JS';
    export default {
        name:'Login',
        data(){
            return{
                username:'',
                password:''
            }
        },
        methods:{
            handleToLogin(){
                this.axios.post('/api2/users/login',{
                    username:this.username,
                    password:this.password
                }).then((res)=>{
                    var status = res.data.status;
                    var This = this;
                    if(status===0){
                        box({
                            title:'登录',
                            content:'登录成功',
                            ok:'确定',
                            handleOk(){
                                This.$router.push('/mine/wode');    
                            }
                        });
                    }else{
                        box({
                            title:'登录',
                            content:'登录失败',
                            ok:'确定'
                        });
                    }
                })
            }
        }
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
    background: #ff6761;
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
    color: #ff6761;
}
</style>