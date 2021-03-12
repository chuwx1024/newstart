import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入 iconFont
import './assets/iconFont/iconfont'
import './assets/iconFont/icon.css'

// 引入全局样式
import '@/assets/style/index.less'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
