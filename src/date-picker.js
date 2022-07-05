import { defineComponent, ref } from 'vue'
import { CommonPicker, timePickerDefaultProps } from 'element-plus/es/components/time-picker/index'
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

export default defineComponent({
  name: 'DateWeekRange',
  props: {
    ...timePickerDefaultProps
  },
  emits: ['update:modelValue'],
  setup(props, ctx) {
    const commonPicker = ref(null)
    const refProps = {
      ...props,
      focus: () => {
        commonPicker.value?.handleFocus()
      },
    }
    ctx.expose(refProps)

    return () => {
      return <CommonPicker
        {...props}
        ref={commonPicker}
        type={'daterange'}
        format={'YYYY年ww周'}
        onUpdate:modelValue={value => ctx.emit('update:modelValue', value)}
      >
        {{
          default: (props) => <WeekRangePickPanel {...props} />,
        }}
      </CommonPicker>
    }
  },
})
