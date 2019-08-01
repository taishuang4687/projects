<template>
    <div class='search-content'>
        <div class="search-input">
            <div class="search-input-wrapper">
                <i class='iconfont icon-sousuo'></i>
                <input type="text" v-model='message'>
            </div>
        </div>
        <div class="search-return">
            <h3>电影/电视剧/综艺</h3>
            <ul>
                <li v-for='item in movieList' :key='item.id'>
                    <div class="img">
                        <img :src="item.img | setWH('64.90')" alt=""/>
                    </div>
                    <div class="text">
                        <p><span>{{item.nm}}</span><span>{{item.sc}}</span></p>
                        <p>{{item.enm}}</p>
                        <p>{{item.cat}}</p>
                        <p>{{item.rt}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                message : '',
                movieList : []
            }
        },
        methods:{
            //请求频繁时取消上一次操作
            cancelRequest(){
                if(typeof this.source === 'function'){
                    this.source('终止取消');
                }
            }
        },
        //计算属性不适合异步操作，所以用watch
        watch : {
            message(newVal){
                var that = this;
                this.cancelRequest();
                // console.log(newVal);
                this.axios.get('/api/searchList?cityId=10&kw='+newVal,{
                    cancelToken : new this.axios.CancelToken(function(c){
                        that.source = c;
                    })
                }).then((res)=>{
                    var msg = res.data.msg;
                    var movies = res.data.data.movies;
                    if(msg && movies){
                        this.movieList = res.data.data.movies.list;
                    }
                }).catch((err)=>{
                    if(this.axios.isCancel(err)){
                        console.log('请求取消', err.message);//请求如果被取消，这里是返回取消的message
                    }else{
                        console.log(err);
                    }
                })
            }
        },
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