<template>
    <div>
         <Header title='yebo影院'></Header>
         <div id="content">
             <div class="cinema-menu">
                 <div class="city-part">
                     全城 <i class='iconfont icon-icon_sanjiaoxing'></i>
                 </div>
                 <div class="brand-part">
                     品牌 <i class='iconfont icon-icon_sanjiaoxing'></i>
                 </div>
                 <div class="feature-part">
                     特色 <i class='iconfont icon-icon_sanjiaoxing'></i>
                 </div>
             </div>
         </div>
         <div class="middle">
            <CinemaPart></CinemaPart>
         </div>
         <Footer></Footer>
    </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CinemaPart from '@/components/CinemaPart';
    export default {
        components:{
            Header,
            Footer,
            CinemaPart
        },
        name:'Cinema'
    }
</script>

<style scoped>
.middle{
    margin-top: 95px;
}
#content .cinema-menu{
    color: #999;
    width: 100%;
    height: 45px;
    line-height: 45px;
    background: #fff;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    text-align: center;
    position: fixed;
    top: 50px;
}
.cinema-menu div{
    flex: 1;
}
</style>