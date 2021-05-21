import DatePicker from './date-picker'
import pkg from '../package.json'
import { use as locale, i18n } from 'element-plus/lib/locale'
import 'dayjs/locale/zh-cn'
import lang from 'element-plus/lib/locale/lang/zh-cn'
locale(lang)

function install(app, option = {}) {
  app.component(DatePicker.name, DatePicker)

  locale(option.locale)
  if (option.i18n) {
    i18n(option.i18n)
  }
}

DatePicker.install = install
DatePicker.version = pkg.version

export const DateWeekRange = DatePicker;

export { locale, install }

export default DatePicker
