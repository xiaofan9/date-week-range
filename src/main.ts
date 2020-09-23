import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import dateWeekRange from '../packages/date-week-range'

Vue.config.productionTip = false

Vue.use(ElementUI).use(dateWeekRange)
new Vue({
  render: (h) => h(App)
}).$mount('#app')
