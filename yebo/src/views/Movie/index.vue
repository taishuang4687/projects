<template>
  <div id="main">
    <Header title="yebo电影"></Header>
    <div id="content">
      <div class="movie-menu">
        <router-link tag="div" to="/movie/city" class="city-name">
          <span>{{$store.state.city.nm}}</span>
          <i class="iconfont icon-icon_sanjiaoxing"></i>
        </router-link>
        <div class="hot-list">
          <router-link tag="div" to="/movie/nowhot" class="hot-content">正在热映</router-link>
          <router-link tag="div" to="/movie/comingsoon" class="hot-content">即将上映</router-link>
        </div>
        <router-link tag="div" to="/movie/search" class="search">
          <i class="iconfont icon-sousuo"></i>
        </router-link>
      </div>
    </div>
    <keep-alive>
      <div id="middle">
        <router-view />
      </div>
    </keep-alive>
    <Footer></Footer>
    <router-view name='detail' />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { box } from "@/components/JS";
export default {
  components: {
    Header,
    Footer
  },
  mounted() {
    setTimeout(() => {
      this.axios.get("/api/getLocation").then(res => {
        var msg = res.data.msg;
        if (msg === "ok") {
            var nm = res.data.data.nm;
            var id = res.data.data.id;
            if(this.$store.state.city.id==id){
                return;
            }
          box({
            title: "定位",
            content: nm,
            cancle: "取消",
            ok: "切换定位",
            // handleCancle: function() {
            //   console.log(1);
            // },
            handleOk: function() {
              window.localStorage.setItem('nowNm',nm);
              window.localStorage.setItem('nowId',id);
              window.location.reload();
            }
          });
        }
      });
    }, 3000);
  },
  name: "Movie" //用于方便找组件
};
</script>

<style scoped>
#middle {
  margin-top: 95px;
}
#content .movie-menu {
  width: 100%;
  height: 45px;
  line-height: 45px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  text-align: center;
  position: fixed;
  top: 50px;
  z-index: 1;
  background: #fff;
}
#content .city-name {
  height: 100%;
  margin-left: 20px;
}
#content .city-name.active {
  color: #ff6761;
}
#content .city-name.router-link-active {
  color: #ff6761;
}
#content .hot-list.active {
  color: #ff6761;
  border-bottom: 2px solid #ff6761;
}
#content .hot-list.router-link-active {
  color: #ff6761;
  border-bottom: 2px solid #ff6761;
}
#content .hot-list {
  display: flex;
  height: 100%;
}
#content .hot-content {
  width: 80px;
  font-size: 15px;
  color: #666;
  margin: 0 12px;
}
#content .hot-content.active {
  color: #ff6761;
  border-bottom: 2px solid #ff6761;
}
#content .hot-content.router-link-active {
  color: #ff6761;
  border-bottom: 2px solid #ff6761;
}
#content .search {
  height: 100%;
  margin-right: 20px;
}
#content .search i {
  font-size: 24px;
  color: #ff6761;
}
</style>