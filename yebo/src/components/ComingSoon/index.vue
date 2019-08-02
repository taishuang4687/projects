<template>
  <div class="movie_content" ref="movie_content">
    <Loading v-if="isLoading" />
    <ul v-else>
      <li class="pull">{{pullMsg}}</li>
      <li v-for="item in comingList" :key="item.id">
        <div class="img-show">
          <img :src="item.img | setWH('64.90')" alt />
        </div>
        <div class="info-list">
          <h2>{{item.nm}}</h2>
          <p>
            评分:
            <span class="grade">{{item.sc}}</span>
          </p>
          <p>主演：{{item.star}}</p>
          <p>{{item.rt}}即将上映</p>
        </div>
        <div class="buy-ticket">预定</div>
      </li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      comingList: [],
      pullMsg: "",
      isLoading: true
    };
  },
  name: "ComingSoon",
  mounted() {
    this.axios.get("/api/movieComingList?cityId=10").then(res => {
      var msg = res.data.msg;
      if (msg === "ok") {
        this.comingList = res.data.data.comingList;
        this.isLoading = false;
        this.$nextTick(() => {
          var scroll = new BScroll(this.$refs.movie_content, {
            tap: true,
            probeType: 1
          });
          scroll.on("scroll", pos => {
            if (pos.y > 30) {
              this.pullMsg = "刷新中";
            }
          });
          scroll.on("touchEnd", pos => {
            if (pos.y > 30) {
              this.axios.get("/api/movieComingList?cityId=10").then(res => {
                var msg = res.data.msg;
                if (msg === "ok") {
                  this.pullMsg = "刷新完成";
                  setTimeout(() => {
                    this.comingList = res.data.data.comingList;
                    this.pullMsg = "";
                  }, 1000);
                }
              });
            }
          });
        });
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