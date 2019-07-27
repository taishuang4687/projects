<template>
    <div>
        <Header title='yebo电影'></Header>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
    export default {
        components:{
            Header,
            Footer
        },
        name:'Movie'//用于方便找组件
    }
</script>

<style scoped>

</style>