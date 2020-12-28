import Vue from 'vue'
import App from './App.vue'
import dateWeekRange from 'date-week-range'
import 'element-ui/lib/theme-chalk/date-picker.css'
import './scss/element-variables.scss'

Vue.config.productionTip = false
Vue.use(dateWeekRange)

new Vue({
  render: (h) => h(App)
}).$mount('#app')
