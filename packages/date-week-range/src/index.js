import DatePicker from './picker/date-picker'
import 'element-ui/packages/theme-chalk/src/date-picker.scss';

function install(Vue) {
  Vue.component(DatePicker.name, DatePicker)
}

/* istanbul ignore next */
DatePicker.install = install

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default DatePicker
