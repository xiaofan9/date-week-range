import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import FormEngine from '../packages/form/src'

Vue.config.productionTip = false

Vue.use(ElementUI).use(FormEngine)
new Vue({
  render: (h) => h(App)
}).$mount('#app')
