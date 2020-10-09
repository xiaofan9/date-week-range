import Vue from 'vue'
import App from './App.vue'
import dateWeekRange from 'date-week-range'

Vue.config.productionTip = false

Vue.use(dateWeekRange)
new Vue({
  render: (h) => h(App)
}).$mount('#app')
