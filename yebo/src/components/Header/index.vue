<template>
        <div id="header">
            <slot></slot><p>{{title}}</p>
        </div>
</template>

<script>
    export default {
        name:'Header',
        props:{
            title:{
                default:'yebo电影'
            }
        }
    }
</script>

<style scoped>
#header{
    width: 100%;
    height: 50px;
    color: #fff;
    background: #ff0036;
    line-height: 50px;
    text-align: center;
    position: fixed;
    top: 0;
    z-index: 1;
}
#header p{
    font-size: 18px;
}
#header i{
    position: absolute;
    left: 10px;
    top: 5px;
}
#header .icon-fanhui{
    font-size:30px;
}
</style>