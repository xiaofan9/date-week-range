import { createApp } from 'vue'
import App from './App.vue'
import DateWeekRange from '../../dist/index.min'
import '../../dist/index.css'

const app = createApp(App)

app.use(DateWeekRange)
app.mount('#app');

export default app;
