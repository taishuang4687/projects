<template>
  <div class="city-content">
    <div class="city_list">
      <Loading v-if="isLoading" />
      <Scroll v-else ref="city_list">
        <div>
          <div class="hot-city">
            <h2>热门城市</h2>
            <ul class="clearfix">
              <li v-for="item in hotList" :key="item.id" @tap='handleToCity(item.nm,item.id)'>{{item.nm}}</li>
            </ul>
          </div>
          <div class="city_sort" ref="city_sort">
            <div v-for="item in cityList" :key="item.index">
              <h2>{{item.index}}</h2>
              <ul>
                <li v-for="itemList in item.list" :key="itemList.id" @tap='handleToCity(itemList.nm,itemList.id)'>{{itemList.nm}}</li>
              </ul>
            </div>
          </div>
        </div>
      </Scroll>
    </div>
    <div class="city-index">
      <ul>
        <li
          v-for="(item,index) in cityList"
          :key="item.index"
          @click="clickIndex(index)"
        >{{item.index}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "City",
  data() {
    return {
      cityList: [],
      hotList: [],
      isLoading: true
    };
  },
  mounted() {
    var cityList = window.localStorage.getItem('cityList');
    var hotList = window.localStorage.getItem('hotList');
    if(cityList&&hotList){
      this.cityList = JSON.parse(cityList);
      this.hotList = JSON.parse(hotList);
      this.isLoading = false;
    }
    this.axios.get("/api/cityList").then(res => {
      //判断数据是否返回成功
      // console.log(res);
      var msg = res.data.msg;
      if (msg === "ok") {
        var cities = res.data.data.cities;
        this.isLoading = false;
        var { cityList, hotList } = this.formatCitiList(cities); //解构出来
        this.cityList = cityList;
        this.hotList = hotList;
        //进行本地存储，性能优化
        window.localStorage.setItem('cityList',JSON.stringify(cityList));
        window.localStorage.setItem('hotList',JSON.stringify(hotList));
      }
    });
  },
  methods: {
    //点击切换相应城市方法
    handleToCity(nm,id){
      this.$store.commit('city/CITY_INFO',{nm,id});
      window.localStorage.setItem('nowNm',nm);
      window.localStorage.setItem('nowId',id);
      this.$router.push('/movie/nowHot');//跳转到最初页面
    },
    //点击跳转到相同值方法
    clickIndex(index) {
      var h2 = this.$refs.city_sort.getElementsByTagName("h2");
      // this.$refs.city_sort.parentNode.scrollTop=h2[index].offsetTop;
      this.$refs.city_list.toIndex(-h2[index].offsetTop);
    },
    formatCitiList(cities) {
      var cityList = []; //城市列表
      var hotList = []; //热门城市列表
      //检索热门城市
      for (var i = 0; i < cities.length; i++) {
        if (cities[i].isHot === 1) {
          hotList.push(cities[i]);
        }
      }
      //城市列表
      for (var i = 0; i < cities.length; i++) {
        var firstLetter = cities[i].py.substring(0, 1).toUpperCase(); //转成大写
        if (compare(firstLetter)) {
          cityList.push({
            index: firstLetter,
            list: [{ nm: cities[i].nm, id: cities[i].id }]
          });
        } else {
          for (var j = 0; j < cityList.length; j++) {
            if (cityList[j].index === firstLetter) {
              cityList[j].list.push({ nm: cities[i].nm, id: cities[i].id });
            }
          }
        }
      }
      cityList.sort((n1, n2) => {
        if (n1.index > n2.index) {
          return 1;
        } else if (n1.index < n2.index) {
          return -1;
        } else {
          return 0;
        }
      });
      function compare(firstLetter) {
        //进行首字母开头比较
        for (var i = 0; i < cityList.length; i++) {
          if (cityList[i].index === firstLetter) {
            return false;
          }
        }
        return true;
      }
      return {
        cityList,
        hotList
      };
      // console.log(hotList);
    }
  }
};
</script>

<style scoped>
.city-content {
  width: 100%;
  margin-top: 45px;
  display: flex;
  position: absolute;
  top: 51px;
  bottom: 50px;
}
.city-content .city_list {
  flex: 1;
  overflow: auto;
  background: #fff5f0;
}
.city-content .city_list::-webkit-scrollbar {
  background-color: transparent;
  width: 0;
}
.city-content .hot-city {
  margin-top: 20px;
}
.city-content .hot-city h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 15px;
  background: #f0f0f0;
}
.city-content .hot-city ul li {
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
.city-content .city_sort div {
  margin-top: 20px;
}
.city-content .city_sort h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
}
.city-content .city_sort ul {
  padding-left: 10px;
  margin-top: 10px;
}
.city-content .city_sort ul li {
  line-height: 30px;
}
.city-content .city-index {
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-left: 1px solid #999;
}
</style>