<template>
        <div id="footer">
            <ul>
                <router-link tag='li' to='/movie'>
                    <i class="iconfont icon-sousuo"></i>
                    <p>电影</p>
                </router-link>
                <router-link tag='li' to='/cinema'>
                    <i class='iconfont icon-sousuo'></i>
                    <p>影院</p>
                </router-link>
                <router-link tag='li' to='/mine'>
                    <i class="iconfont icon-sousuo"></i>
                    <p>我的</p>
                </router-link>
            </ul>
        </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
#footer{
    width: 100%;
    height: 50px;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    text-align: center;
    border-top: 1px solid #ccc;
}
#footer ul{
    display: flex;
}
#footer li{
    flex: 1;
}
#footer li.active{
    color: #ff0036;
}
#footer li.router-link-active{
    color: #ff0036;
}
#footer i{
    font-size: 18px;
}
#footer p{
    font-size: 12px;
    line-height: 18px;
}
</style>