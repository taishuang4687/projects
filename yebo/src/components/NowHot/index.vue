<template>
    <div class='movie-content'>
        <ul>
            <li>
                <div class="img-show">
                    <img src="../../../public/imgs/ktv_music.jpg" alt="">
                </div>
                <div class="info-list">
                    <h2>无名之辈</h2>
                    <p>评分:<span class='grade'>9.0</span></p>
                    <p>主演：陈建兵</p>
                    <p>共放映600场</p>
                </div>
                <div class="buy-ticket">
                    购票
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'NowHot'
    }
</script>

<style scoped>
.movie-content{
    flex: 1;
    overflow: auto;
    margin-top:95px; 
    margin-bottom:50px;
}
.movie-content ul{
    margin: 0 12px;
    overflow: hidden;
}
.movie-content ul li{
    margin-top: 12px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
}
.movie-content .img-show{
    width: 64px;
    height: 90px;
}
.movie-content .img-show img{
    width: 100%;
    height: 90px;
}
.movie-content .info-list{
    position:relative;
    flex: 1;
    margin-left: 10px;
}
.movie-content .info-list h2{
    width: 150px;
    font-size: 16px;
    line-height: 24px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.movie-content .info-list p{
    width: 200px;
    font-size: 13px;
    color: #ccc;
    line-height: 22px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.movie-content .info-list .grade{
    font-weight: 700;
    color: #faaf00;
    font-size: 15px;
}
.movie-content .info-list img{
    width: 50px;
    position: absolute;
    top: 5px;
    right: 10px;
}
.movie-content .buy-ticket{
    width: 45px;
    height: 25px;
    line-height: 15px;
    text-align: center;
    background-color: antiquewhite;
}
</style>