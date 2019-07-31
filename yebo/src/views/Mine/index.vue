<template>
    <div>
        <Header title='个人中心'></Header>
        <div id="content">
            <Login></Login>
        </div>
        <Footer></Footer>
    </div> 
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Login from '@/components/Login'
    export default {
        components:{
            Header,
            Footer,
            Login
        },
        name:'Mine'
    }
</script>

<style scoped>

</style>