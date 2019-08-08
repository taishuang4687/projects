<template>
    <div class='container'>
        <div>
            个人中心:
        </div>
        <div>
            {{$store.state.user.name}}用户：您好
            <a href="javascript:;" @click='handleToLogout'>退出</a>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        name:'wode',
        methods:{
            handleToLogout(){
                this.axios.get('/api2/users/logout').then((res)=>{
                    var status = res.data.status;
                    if(status===0){
                        this.$store.commit('user/USER_NAME',{name:''});
                        this.$router.push('/mine/login');
                    }
                });
            }
        },
        //前缀守卫，只有登录才进去个人中心，否则进入登录页
        beforeRouteEnter(to,from,next){
            axios.get('/api2/users/getUser').then((res)=>{
                var status = res.data.status;
                if(status===0){
                    next(vm=>{
                        vm.$store.commit('user/USER_NAME',{name:res.data.data.username});
                    });
                }else{
                    next('/mine/login')
                }
            })
        }
    }
</script>

<style scoped>
.container{
    margin-top: 50px;
    padding: 0 10px;
}
</style>