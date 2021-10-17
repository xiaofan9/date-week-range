import DatePicker from './week-picker'
import pkg from '../package.json';
import locale from 'element-ui/src/locale';

function install(Vue, opts = {}) {
  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  Vue.component(DatePicker.name, DatePicker);
}

DatePicker.install = install
const version = DatePicker.version = pkg.version

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export const DateWeekRange = DatePicker;

export {
  install,
  version,
  locale
}

export default DatePicker;