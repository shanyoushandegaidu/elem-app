import Vue from 'vue';
import axios from  'axios';
import VueAxios from 'vue-axios';


Vue.use(VueAxios,axios);

//设置网络请求的baseURL
axios.defaults.baseURL= "https://elm.cangdu.org";
//设置跨域发送cookie    如果跨域cookie默认是不传递的    想要跨域传递 需要设置withCredentials=true
axios.defaults.withCredentials = true;

//设置一个响应的拦截器
axios.interceptors.response.use(res=>{
    return res.data;
},err=>{
    return Promise.reject(err);
});