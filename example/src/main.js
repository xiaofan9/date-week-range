import Vue from 'vue'
import App from './App.vue'
import DateWeekRange from '../../src'
import 'element-ui/lib/theme-chalk/icon.css'
import 'element-ui/lib/theme-chalk/date-picker.css'
import locale from 'element-ui/lib/locale/lang/en'

Vue.config.productionTip = false
Vue.use(DateWeekRange, { locale })

new Vue({
  render: (h) => h(App)
}).$mount('#app')
