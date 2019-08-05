<template>
    <div class='container'>
        个人中心:<a href="javascript:;" @touchstart='handleToLogout'>退出</a>
    </div>
</template>

<script>
    export default {
        name:'wode',
        methods:{
            handleToLogout(){
                this.axios.get('/api2/users/logout').then((res)=>{
                    var status = res.data.status;
                    if(status===0){
                        this.$router.push('/mine/login');
                    }
                })
            }
        }
    }
</script>

<style scoped>
.container{
    margin-top: 50px;
}
</style>