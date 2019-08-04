<template>
    <div id='container'>
        <Header title='影片详情'>
            <i class="iconfont icon-fanhui" @touchstart='clickToBack'></i>
        </Header>
        <Loading v-if='isLoading'/>
        <div v-else id="content" class='contentDetail'>
            <div class="detail_list">
                <div class="detail_list_bg" :style="{'background-image':'url('+detailMovie.img.replace(/w\.h/,'148.208')+')'  }"></div>
                <div class="detail_list_filer"></div>
                <div class="detail_list_content">
                    <div class="detail_list_img">
                        <img :src="detailMovie.img | setWH(148.208)" alt="">
                    </div>
                    <div class="detail_list_info">
                        <h2>{{detailMovie.nm}}</h2>
                        <p>{{detailMovie.enm}}</p>
                        <p>{{detailMovie.sc}}</p>
                        <p>{{detailMovie.cat}}</p>
                        <p>{{detailMovie.src}}/{{detailMovie.dur}}</p>
                        <p>{{detailMovie.pubDesc}}</p>
                    </div>
                </div>
            </div>
            <div class='introduce' ref='introduce'>
            <div class="detail_intro">
                <p>{{detailMovie.dra}}</p>
            </div>
            <div class="detail_player swiper-container" ref='detail_player'>
                <ul class='swiper-wrapper'>
                    <li v-for='(item,index) in detailMovie.photos' :key='index' class='swiper-slide'>
                        <div>
                            <img :src="item | setWH(148.208)" alt="">
                        </div>
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
        data(){
            return{
                detailMovie:{},
                isLoading:true
            }
        },
        props:['movieId'],
        methods:{
            clickToBack(){
                this.$router.back();
            }
        },
        mounted(){
            this.axios.get('/api/detailMovie?movieId='+this.movieId).then((res)=>{
                var msg = res.data.msg;
                if(msg==='ok'){
                    this.detailMovie = res.data.data.detailMovie;
                    this.isLoading = false;
                    this.$nextTick(()=>{
                        new Swiper(this.$refs.detail_player,{
                            slidesPreView:'auto',
                            freeMode:true,
                            freeModeSticky:true
                        });
                    });
                    this.$nextTick(()=>{
                        new Swiper(this.$refs.introduce,{
                            slidesPreView:'auto',
                            freeMode:true,
                            freeModeSticky:true
                        });
                    });
                }
            })
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
    background:  0 40%;
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
    color: #ffffee;
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
    /* text-align: center;
    font-size: 14px; */
}
.detail_player .swiper-slide img{
    width: 100%;
    height: 150px;
    margin-bottom: 5px;
}
</style>