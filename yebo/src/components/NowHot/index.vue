<template>
  <div class="movie_content" ref="movie_content">
    <Loading v-if='isLoading' />
    <Scroll :toScroll="toScroll" :toTouchEnd="toTouchEnd" v-else>
      <ul>
        <li class="pull">{{pullMsg}}</li>
        <li v-for="item in movieList" :key="item.id">
          <div class="img-show" @tap="toDetail">
            <img :src="item.img | setWH('64.90')" alt />
          </div>
          <div class="info-list">
            <h2>{{item.nm}}</h2>
            <p>
              评分:
              <span class="grade">{{item.sc}}</span>
            </p>
            <p>主演：{{item.star}}</p>
            <p>{{item.showInfo}}</p>
          </div>
          <div class="buy-ticket">购票</div>
        </li>
      </ul>
    </Scroll>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      movieList: [],
      pullMsg: "",
      isLoading:true
    };
  },
  methods: {
    toDetail() {
      console.log(1111);
    },
    toScroll(pos) {
      if (pos.y > 30) {
        this.pullMsg = "刷新中";
      }
    },
    toTouchEnd(pos) {
      if (pos.y > 30) {
        this.axios.get("/api/movieOnInfoList?city=10").then(res => {
          var msg = res.data.msg;
          if (msg === "ok") {
            this.pullMsg = "刷新完成";
            setTimeout(() => {
              this.movieList = res.data.data.movieList;
              this.pullMsg = "";
            }, 1000);
          }
        });
      }
    }
  },
  name: "NowHot",
  mounted() {
    this.axios.get("/api/movieOnInfoList?city=10").then(res => {
      var msg = res.data.msg;
      if (msg === "ok") {
        this.movieList = res.data.data.movieList;
        // loading无
        this.isLoading = false; 
      }
    });
  }
};
</script>

<style scoped>
.movie_content {
  flex: 1;
  overflow: auto;
  height: 555px;
}
.movie_content ul {
  margin: 0 12px;
  overflow: hidden;
}
.movie_content ul li {
  margin-top: 12px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}
.movie_content .img-show {
  width: 64px;
  height: 90px;
}
.movie_content .img-show img {
  width: 100%;
  height: 90px;
}
.movie_content .info-list {
  position: relative;
  flex: 1;
  margin-left: 10px;
}
.movie_content .info-list h2 {
  width: 150px;
  font-size: 16px;
  line-height: 24px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie_content .info-list p {
  width: 200px;
  font-size: 13px;
  color: #ccc;
  line-height: 22px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie_content .info-list .grade {
  font-weight: 700;
  color: #faaf00;
  font-size: 15px;
}
.movie_content .info-list img {
  width: 50px;
  position: absolute;
  top: 5px;
  right: 10px;
}
.movie_content .buy-ticket {
  width: 45px;
  height: 25px;
  line-height: 15px;
  text-align: center;
  background-color: antiquewhite;
}
.movie_content .pull {
  padding: 0;
  margin: 0;
  border: none;
}
</style>