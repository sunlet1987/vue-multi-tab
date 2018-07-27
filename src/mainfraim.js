import Vue from 'vue'
import VueRouter from 'vue-router'

import router from './router'
import index from './mainfraim.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(VueRouter)
new Vue({
    el: '#app',
    router,
    render: v => v(index)
})