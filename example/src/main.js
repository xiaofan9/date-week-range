import { createApp } from 'vue'
import App from './App.vue'
import dateWeekRange from '../../src/index'
import elementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/el-date-picker.css'
import './scss/element-variables.scss'
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale/lang/zh-cn'

const app = createApp(App)

app.use(dateWeekRange)
app.use(elementPlus, { locale })
app.mount('#app');

export default app;
