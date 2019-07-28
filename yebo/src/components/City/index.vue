<template>
    <div class='city-content'>
        <div class="city-list">
            <div class="hot-city">
                <h2>热门城市</h2>
                <ul class="clearfix">
                    <li>北京</li>
                    <li>北京</li>
                    <li>北京</li>
                    <li>北京</li>
                    <li>北京</li>
                    <li>北京</li>
                    <li>北京</li>
                    <li>北京</li>
                </ul>
            </div>
            <div class="city-sort">
                <div>
                    <h2>A</h2>
                    <ul>
                        <li>鞍山</li>
                    </ul>
                </div>
                <div>
                    <h2>B</h2>
                    <ul>
                        <li>鞍山</li>
                    </ul>
                </div>
                <div>
                    <h2>C</h2>
                    <ul>
                        <li>鞍山</li>
                    </ul>
                </div>
                <div>
                    <h2>D</h2>
                    <ul>
                        <li>鞍山</li>
                    </ul>
                </div>
                <div>
                    <h2>E</h2>
                    <ul>
                        <li>鞍山</li>
                    </ul>
                </div>
                <div>
                    <h2>F</h2>
                    <ul>
                        <li>鞍山</li>
                    </ul>
                </div>
            </div>
        </div>
            <div class='city-index'>
                    <ul>
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                        <li>D</li>
                        <li>E</li>
                    </ul>
                </div>
    </div>
</template>

<script>
    export default {
        name:'City'
    }
</script>

<style scoped>
.city-content{
    width: 100%;
    margin-top: 45px;
    display: flex;
    position: absolute;
    top: 51px;
    bottom: 50px;
}
.city-content .city-list{
    flex: 1;
    overflow: auto;
    background: #fff5f0;
}
.city-content .city-list::-webkit-scrollbar{
    background-color: transparent;
    width: 0;
}
.city-content .hot-city{
    margin-top: 20px;
}
.city-content .hot-city h2{
    padding-left: 15px;
    line-height: 30px;
    font-size: 15px;
    background: #f0f0f0;
}
.city-content .hot-city ul li{
    float: left;
    background: #fff;
    width: 29%;
    height: 33px;
    margin-top: 15px;
    margin-left: 3%;
    padding: 0 4px;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
    line-height: 33px;
    text-align: center;
    box-sizing: border-box;
}
.city-content .city-sort div{
    margin-top: 20px;
}
.city-content .city-sort h2{
    padding-left: 15px;
    line-height: 30px;
    font-size: 14px;
    background: #f0f0f0;
}
.city-content .city-sort ul{
    padding-left: 10px;
    margin-top: 10px;
}
.city-content .city-sort ul li{
    line-height: 30px;
}
.city-content .city-index{
    width: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border-left: 1px solid #000;
}
</style>