<template>
    <div class="box">
        <h2>{{title}}</h2>
        <p>{{content}}</p>
        <div>
            <div v-if='cancle' @touchstart='handleCancle'>{{cancle}}</div>
            <div v-if='ok' @touchstart='handleOk'>{{ok}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Box'
    }
</script>

<style scoped>
.box{
    width: 200px;
    height: 120px;
    border:1px solid #ccc;
    border-radius: 4px;
    background: #fff;
    box-shadow: 3px 3px 3px 3px #cccccc;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 2;
}
.box h2{
    text-align: center;
    line-height: 40px;
    font-size: 18px;
}
.box p{
    text-align: center;
    line-height: 40px;
}
.box > div{
    display: flex;
    position: absolute;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #ccc;
}
.box > div div{
    flex:1;
    text-align: center;
    line-height: 30px;
    border-right:1px solid #ccc;
}
.box > div div:last-child{
    border: none;
}
</style>