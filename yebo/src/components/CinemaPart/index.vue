<template>
    <div class='cinema-content'>
        <ul>
            <li v-for='item in cinemaList' :key='item.id'>
                <div>
                    <span>{{item.nm}}</span>
                    <span class='q'><span class='price'>{{item.sellPrice}}</span>元起</span>
                </div>
                <div class="address">
                    <span>{{item.addr}}</span>
                    <span>{{item.distance}}</span>
                </div>
                <div class="card">
                    <div class='one'>退</div>
                    <div class='two'>折扣卡</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                cinemaList : []
            }
        },
        name:'CinemaPart',
        mounted(){
            this.axios.get('/api/cinemaList?cityId=10').then((res)=>{
                var msg = res.data.msg;
                // console.log(res);
                if(msg==='ok'){
                    this.cinemaList = res.data.data.cinemas;
                }
            })
        }
    }
</script>

<style scoped>
.cinema-content{
    flex: 1;
    overflow: auto;
    margin-top: 95px;
}
.cinema-content ul{
    padding: 20px;
}
.cinema-content li{
    border-bottom: 1px solid #eee;
    margin-bottom: 20px;
}
.cinema-content div{
    margin-bottom: 10px;
}
.cinema-content .q{
    color: #ff0036;
    font-size: 10px;
}
.cinema-content .price{
    font-size: 18px;
}
.cinema-content .address{
    font-style: 13px;
    color: #666;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.cinema-content .address span:nth-of-type(2){
    float: right;
}
.cinema-content .card{
    display: flex;
}
.cinema-content .card div{
    padding: 0 3px;
    height: 15px;
    line-height: 15px;
    border-radius: 2px;
    color:#f90;
    border: 1px solid #f90;
    font-size: 13px;
    margin-right: 5px;
}
.cinema-content .card .one{
    color: #589daf;
    border: 1px solid #589daf;
}
.cinema-content .card .two{
    color: #f90;
    border: 1px solid #f90;
}
</style>