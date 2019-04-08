// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import "babel-polyfill"
import router from './router'
import axios from 'axios'
import qs from 'qs'
import api from  './api/api'
import ElementUI from 'element-ui';
// 引入echarts
import echarts from 'echarts'

import 'echarts/lib/chart/map';
import 'echarts/map/js/china.js';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/iconfont/iconfont.css';
import './assets/css/public.scss';

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.api = api
Vue.prototype.$echarts = echarts

Vue.use(ElementUI);

router.beforeEach((to,from,next) => {
    if(to.meta.requireAuth){
        // 下面这个判断是自行实现到底是否有没有登录
        if (store.getters.getToken){
            // 登录就继续
            next();
        }else {
            // 没有登录跳转到登录页面，登录成功之后再返回到之前请求的页面
            next({
                path : '/login',
                query : {redirect : to.fullPath}
            })
        }
    }else {
        // 不需要登录的，可以继续访问
        next()
    }
});

axios.interceptors.request.use(function (config) {
    if (localStorage.token) {
        config.headers.Authorization = `token ${localStorage.token}`;
    }
    if(config.method  === 'post'){//post请求需转换参数，否则接收不到
        config.data = qs.stringify(config.data);
    }
    return config;
}, function (err) {
    return Promise.reject(err);
});

/* eslint-disable no-new */
var vm=new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
