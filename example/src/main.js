import Vue from 'vue'
import App from './App.vue'
import DateWeekRange from '../../src'
import 'element-ui/lib/theme-chalk/icon.css'
import 'element-ui/lib/theme-chalk/date-picker.css'

Vue.config.productionTip = false
Vue.use(DateWeekRange)

new Vue({
  render: (h) => h(App)
}).$mount('#app')
