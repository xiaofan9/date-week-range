import DatePicker from './picker/date-picker'
import 'element-ui/packages/theme-chalk/src/date-picker.scss';

/* istanbul ignore next */
DatePicker.install = function install(Vue) {
  Vue.component(DatePicker.name, DatePicker)
}

export default DatePicker
