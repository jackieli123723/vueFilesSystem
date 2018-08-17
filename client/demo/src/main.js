import Vue from 'vue'
import App from './App.vue'

// import '@assets/css/less/cover.less';
import './index.less'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
