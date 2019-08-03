import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import '@/assets/iconfont/iconfont.css'
import '@/assets/css/reset.css'
import '@/assets/css/swiper.min.css'
import '@/assets/js/rem.js'
import '@/assets/js/swiper.min.js'
//避免每调用一个接口都需要引入一次axios
import axios from 'axios'
Vue.prototype.axios = axios
Vue.config.productionTip = false
Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg);
});
import Scroll from '@/components/Scroll';
import Loading from '@/components/Loading';
Vue.component('Scroll',Scroll);
Vue.component('Loading',Loading);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
