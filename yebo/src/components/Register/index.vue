<template>
<div id="container">
    <div>
        用户名：<input v-model='username' class='reg-text' type="text">
    </div>
    <div>
        密码：<input v-model='password' class='reg-text' type="password">
    </div>
    <div class='reg-btn'>
        <input @click='handleToRegister' type="submit" value='注册'/>
    </div>
    <div class='reg-link'>
            <router-link to='/mine/login'>立即登录</router-link>
            <router-link to='/mine/findPassword'>找回密码</router-link>
        </div>
</div>
    
</template>

<script>
import {box} from '@/components/JS';
    export default {
        name:'Register',
        data(){
            return{
                username:'',
                password:''
            }
        },
        methods:{
            handleToRegister(){
                this.axios.post('/api2/users/register',{
                    username:this.username,
                    password:this.password
                }).then((res)=>{
                    var status = res.data.status;
                    var This = this;
                    if(status===0){
                        box({
                            title:'注册',
                            content:'您已注册成功',
                            ok:'确定',
                            handleOk(){
                                This.$router.push('/mine/login');
                            }
                        })
                    }else{
                        box({
                            title:'注册',
                            content:'注册失败，请重新注册',
                            ok:'确定'
                        })
                    }
                })
            }
        }
    }
</script>

<style scoped>
#container{
    width: 100%;
    margin-top: 50px;
}
#container .reg-text{
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: 1px solid #ccc;
    margin-bottom: 5px;
    text-indent: 10px;
    outline: none;
}
#container .reg-btn{
    height: 50px;
    margin: 10px;
}
#container .reg-btn input{
    width: 100%;
    height: 100%;
    background: #ff6761;
    border-radius: 5px;
    border: none;
    display: block;
    color: #fff;
    font-size: 15px;
}
#container .reg-link{
    display: flex;
    justify-content: space-between;
}
#container .reg-link a{
    text-decoration: none;
    margin:0 5px;
    font-size: 12px;
    color: #ff6761;
}
</style>