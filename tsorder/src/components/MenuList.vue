<template>
    <li>
        <slot name="imgsrc"></slot>

        <div class="menuName">
            <div class="left">
                <slot name="title"></slot>
                <p>
                    <slot name="price"></slot>
                </p>
            </div>
            <div class="right">
                <a href="#"></a>
            </div>
        </div>
    </li>
</template>
<script>
    
</script>
<style>
    .box{
        background: #c6c2c1;
        padding: 30px 65px 0;
    }
    .boxList{
        width: 900px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .boxList li{
        width: 420px;
        border-radius: 20px;
        background: #fff;
        overflow: hidden;
        margin-bottom: 30px;
        border: 2px solid #ccc7c3;
    }
    .boxList li:hover,.boxList li.active{
        border: 2px solid #f19903;
    }
    .boxList li:hover .menuName .right a,.boxList li.active .menuName .right a{
        background-image: url(../assets/images/ico_12_2.png);
    }
    .menuName{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 30px;
    }
    .menuName .left{
        font-size: 26px;
        color: #796355;
    }
    .menuName .left p{
        font-size: 18px;
        color: #f39706;
    }
    .menuName .left p strong{
        font-size: 34px;
    }
    .menuName .right a{
        display: block;
        width: 60px;
        height: 60px;
        background: url(../assets/images/ico_12_1.png) no-repeat center;
        background-size: 60px;
    }
    .menuName .right a:hover{
        background-image: url(../assets/images/ico_12_2.png);
    }
</style>