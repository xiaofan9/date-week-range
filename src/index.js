import DatePicker from './date-picker'
import pkg from '../package.json'
import { provideGlobalConfig } from 'element-plus/lib/hooks/index'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

function install(app, options = {
  locale: zhCn
}) {
  app.component(DatePicker.name, DatePicker)

  if (options) {
    provideGlobalConfig(options, app, true)
  }
}

export const DateWeekRange = DatePicker;

export default {
  install,
  version: pkg.version
}
