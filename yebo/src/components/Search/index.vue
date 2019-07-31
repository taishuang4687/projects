<template>
    <div class='search-content'>
        <div class="search-input">
            <div class="search-input-wrapper">
                <i class='iconfont icon-sousuo'></i>
                <input type="text">
            </div>
        </div>
        <div class="search-return">
            <h3>电影</h3>
            <ul>
                <li>
                    <div class="img">
                        <img src="../../../public/imgs/ktv_music.jpg" alt=""/>
                    </div>
                    <div class="text">
                        <p><span>无名之辈</span><span>8.0</span></p>
                        <p>a cool fish</p>
                        <p>喜剧</p>
                        <p>2018-11-02</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Search'
    }
</script>

<style scoped>
.search-content{
    width: 100%;
    flex: 1;
    overflow: auto;
    position: absolute;
    top: 95px;
    bottom:50px;
}
.search-content .search-input{
    padding: 8px 10px;
    background-color: #f5f5f5;
    border-bottom: 1px solid #e5e5e5;
}
.search-content .search-input-wrapper{
    padding: 0 10px;
    border-bottom: 1px solid #e6e6e6;
    border-radius: 5px;
    background-color: #fff;
    display: flex;
}
.search-content .search-input-wrapper i{
    font-size: 16px;
    padding: 4px 0;
}
.search-content .search-input-wrapper input{
    font-size: 13px;
    color:#333;
    padding: 4px 0;
    margin-left: 5px;
    width: 100%;
    outline: none;
    border: none;
}
.search-content .search-return h3{
    font-size: 15px;
    color:#999;
    padding: 9px 15px;
    border-bottom: 1px solid #e6e6e6;
}
.search-content .search-return li{
    border-bottom: 1px dashed #c9c9c9;
    padding: 10px 15px;
    box-sizing: border-box;
    display: flex;
}
.search-content .search-return .img{
    width: 60px;
    float: left;
}
.search-content .search-return .img img{
    width: 100%;
    height: 85px;
}
.search-content .search-return .text{
    float: left;
    margin-left: 15px;
    flex: 1;
}
.search-content .search-return .text p{
    height: 22px;
    display: flex;
    line-height: 22px;
    font-size: 12px;
}
.search-content .search-return .text p:nth-of-type(1) span:nth-of-type(1){
    font-size: 18px;
    flex:1;
}
.search-content .search-return .text p:nth-of-type(1) span:nth-of-type(2){
    font-size: 16px;
    color:#fc7103;
}
</style>