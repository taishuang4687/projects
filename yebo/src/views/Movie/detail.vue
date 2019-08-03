<template>
    <div id='container'>
        <Header title='影片详情'>
            <i class="iconfont icon-sousuo" @touchstart='clickToBack'></i>
        </Header>
        <div id="content" class='contentDetail'>
            <div class="detail_list">
                <div class="detail_list_bg"></div>
                <div class="detail_list_filer"></div>
                <div class="detail_list_content">
                    <div class="detail_list_img">
                        <img src="../../../public/imgs/ktv_music.jpg" alt="">
                    </div>
                    <div class="detail_list_info">
                        <h2>无名之辈</h2>
                        <p>a cool man</p>
                        <p>9.0</p>
                        <p>喜剧</p>
                        <p>中国大陆105分钟</p>
                        <p>2019-01-01大陆上映</p>
                    </div>
                </div>
            </div>
            <div class='introduce'>
            <div class="detail_intro">
                <p>我是一个粉刷匠，粉刷本领强，哈哈哈哈哈太熟那个，东方路金波刚打开了就不行咯奇偶进口货vlozio</p>
            </div>
            <div class="detail_player swiper-container">
                <ul class='swiper-wrapper'>
                    <li class='swiper_slide'>
                        <div>
                            <img src="../../../public/imgs/ktv_music.jpg" alt="">
                        </div>
                        <p>陈建斌</p>
                        <p>马先勇</p>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header';
    export default {
        name:'detail',
        props:['movieId'],
        methods:{
            clickToBack(){
                this.$router.back();
            }
        },

        components:{
            Header
        }
    }
</script>

<style scoped>
#container{
    position: fixed;
    left: 0;
    top:50px;
    z-index: 2;
    width: 100%;
    min-height: 100%;
    background: #fff;
}
.detail_list{
    height: 200px;
    width: 100%;
    position: relative;
    overflow: hidden;
}
.detail_list .detail_list_bg{
    width: 100%;
    height: 100%;
    background: url(../../../public/imgs/ktv_music.jpg) 0 40%;
    filter: blur(20px);
}
.detail_list .detail_list_filter{
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #40454d;
    opacity: .55;
}
.introduce{
    height: 450px;
    overflow: scroll;
}
.detail_list .detail_list_content{
    display: flex;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0px;
    z-index: 2;
}
.detail_list .detail_list_img{
    width: 108px;
    height: 150px;
    border: 1px solid #ccc;
    margin: 20px;
}
.detail_list .detail_list_img img{
    width: 100%;
    height: 100%;
}
.detail_list .detail_list_info{
    margin-top: 20px;
}
.detail_list .detail_list_info h2{
    font-size: 20px;
    color: #fff;
    font-weight: normal;
    line-height: 40px;
}
.detail_list .detail_list_info p{
    color: #fff;
    line-height: 20px;
    font-size: 14px;
    color: #999;
}
.detail_intro{
    padding: 10px;
}
.detail_player{
    margin: 20px;
}
.detail_player .swiper-slide{
    width: 70px;
    margin-right: 20px;
    text-align: center;
    font-size: 14px;
}
.detail_player .swiper-slide img{
    width: 100%;
    margin-bottom: 5px;
}
.detail_player .swiper-slide p:nth-of-type(2){
    color: #999;
}
</style>