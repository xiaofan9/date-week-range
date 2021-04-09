import { createApp } from 'vue'
import App from './App.vue'
import dateWeekRange from '../../src/index'
import 'element-plus/lib/theme-chalk/el-date-picker.css'
import './scss/element-variables.scss'

const app = createApp(App)

app.use(dateWeekRange)
app.mount('#app');

export default app;
