import  "babel-polyfill";   // 兼容IE

import Vue from 'vue'
import store from '@/Store/index'
import index from './MainFrame.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import TabRoute from '@/Router/TabRoute'
import RouterMethods from '@/Router/RouterMethods'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n

Vue.use(TabRoute)
Vue.use(RouterMethods)
Vue.use(ElementUI, { locale, size: 'small' })

new Vue({
    el: '#app',
    store,
    render: v => v(index)
})