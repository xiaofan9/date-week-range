import DatePicker from './picker/date-picker'
import pkg from '../package.json';

function install(Vue) {
  Vue.component(DatePicker.name, DatePicker)
}

DatePicker.install = install
DatePicker.version = pkg.version

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default DatePicker
