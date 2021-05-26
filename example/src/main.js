import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/icon.css'
import 'element-ui/lib/theme-chalk/date-picker.css'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')
