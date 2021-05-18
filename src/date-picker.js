import { defineComponent, ref, h } from 'vue'
import { DEFAULT_FORMATS_DATE, DEFAULT_FORMATS_DATEPICKER, CommonPicker, defaultProps } from 'element-plus/lib/el-time-picker'
import WeekRangePickPanel from './date-picker-com/panel-week-range.vue'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import localeData from 'dayjs/plugin/localeData'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import weekYear from 'dayjs/plugin/weekYear'
import dayOfYear from 'dayjs/plugin/dayOfYear'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
dayjs.extend(localeData)
dayjs.extend(advancedFormat)
dayjs.extend(customParseFormat)
dayjs.extend(weekOfYear)
dayjs.extend(weekYear)
dayjs.extend(dayOfYear)
dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)

import lang from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale'

// 设置语言
locale.use(lang)

export default defineComponent({
  name: 'DateWeekRange',
  install: null,
  props: {
    ...defaultProps,
    type: {
      type: String,
      default: 'date',
    },
  },
  emits: ['update:modelValue'],
  setup(props, ctx) {
    const commonPicker = ref(null)
    const format = DEFAULT_FORMATS_DATEPICKER[props.type] || DEFAULT_FORMATS_DATE
    const refProps = {
      ...props,
      focus: () => {
        commonPicker.value?.handleFocus()
      },
    }
    ctx.expose(refProps)
    return () => h(CommonPicker, {
      format,
      ...props, // allow format to be overwrite
      type: props.type,
      ref: commonPicker,
      'onUpdate:modelValue': value => ctx.emit('update:modelValue', value),
    },
    {
      default: scopedProps => h(WeekRangePickPanel, scopedProps),
    })
  },
})
