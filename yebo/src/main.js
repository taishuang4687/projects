import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import '@/assets/iconfont/iconfont.css'
import '@/assets/css/reset.css'
import '@/assets/js/rem.js'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
