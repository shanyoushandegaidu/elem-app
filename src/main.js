import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//引入 reset-css
import "reset-css";
//引入axios的index.js
import './axios/index';

//加载resize.js
import './assets/resize';

//引入swiper
// import Swiper from 'swiper';
// import 'swiper/css/swiper.min.css';
// Vue.use('Swiper');


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
