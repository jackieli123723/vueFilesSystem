import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import '@assets/css/less/cover.less';
// import './index.less'



import * as filters from './filters' 
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})


Vue.config.productionTip = false



// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
