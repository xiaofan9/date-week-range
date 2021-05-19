<template>
  <div
    class="el-picker-panel el-date-range-picker"
    :class="[{
      'has-sidebar': $slots.sidebar || hasShortcuts
    }]"
  >
    <div class="el-picker-panel__body-wrapper">
      <slot name="sidebar" class="el-picker-panel__sidebar"></slot>
      <div v-if="hasShortcuts" class="el-picker-panel__sidebar">
        <button
          v-for="(shortcut, key) in shortcuts"
          :key="key"
          type="button"
          class="el-picker-panel__shortcut"
          @click="handleShortcutClick(shortcut)"
        >
          {{ shortcut.text }}
        </button>
      </div>
      <div class="el-picker-panel__body">
        <div class="el-picker-panel__content el-date-range-picker__content is-left">
          <div class="el-date-range-picker__header">
            <button
              type="button"
              class="el-picker-panel__icon-btn el-icon-d-arrow-left"
              @click="leftPrevYear"
            ></button>
            <button
              type="button"
              class="el-picker-panel__icon-btn el-icon-arrow-left"
              @click="leftPrevMonth"
            ></button>
            <button
              v-if="unlinkPanels"
              type="button"
              :disabled="!enableYearArrow"
              :class="{ 'is-disabled': !enableYearArrow }"
              class="el-picker-panel__icon-btn el-icon-d-arrow-right"
              @click="leftNextYear"
            ></button>
            <button
              v-if="unlinkPanels"
              type="button"
              :disabled="!enableMonthArrow"
              :class="{ 'is-disabled': !enableMonthArrow }"
              class="el-picker-panel__icon-btn el-icon-arrow-right"
              @click="leftNextMonth"
            ></button>
            <div>{{ leftLabel }}</div>
          </div>
          <date-table
            selection-mode="range"
            :date="leftDate"
            :min-date="minDate"
            :max-date="maxDate"
            :range-state="rangeState"
            :disabled-date="disabledDate"
            :cell-class-name="cellClassName"
            @changerange="handleChangeRange"
            @pick="handleRangePick"
            @select="onSelect"
          />
        </div>
        <div class="el-picker-panel__content el-date-range-picker__content is-right">
          <div class="el-date-range-picker__header">
            <button
              v-if="unlinkPanels"
              type="button"
              :disabled="!enableYearArrow"
              :class="{ 'is-disabled': !enableYearArrow }"
              class="el-picker-panel__icon-btn el-icon-d-arrow-left"
              @click="rightPrevYear"
            ></button>
            <button
              v-if="unlinkPanels"
              type="button"
              :disabled="!enableMonthArrow"
              :class="{ 'is-disabled': !enableMonthArrow }"
              class="el-picker-panel__icon-btn el-icon-arrow-left"
              @click="rightPrevMonth"
            ></button>
            <button
              type="button"
              class="el-picker-panel__icon-btn el-icon-d-arrow-right"
              @click="rightNextYear"
            ></button>
            <button
              type="button"
              class="el-picker-panel__icon-btn el-icon-arrow-right"
              @click="rightNextMonth"
            ></button>
            <div>{{ rightLabel }}</div>
          </div>
          <date-table
            selection-mode="range"
            :date="rightDate"
            :min-date="minDate"
            :max-date="maxDate"
            :range-state="rangeState"
            :disabled-date="disabledDate"
            :cell-class-name="cellClassName"
            @changerange="handleChangeRange"
            @pick="handleRangePick"
            @select="onSelect"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  computed,
  ref,
  inject,
  watch,
} from 'vue'
import { t } from 'element-plus/lib/locale'
import {
  extractDateFormat,
  extractTimeFormat,
} from 'element-plus/lib/el-time-picker'
import { TimePickPanel } from 'element-plus/lib/el-time-picker'
import { ClickOutside } from 'element-plus/lib/directives'
import dayjs from 'dayjs'
import DateTable from './basic-date-table.vue'
import ElInput from 'element-plus/lib/el-input'
import ElButton from 'element-plus/lib/el-button'

export default defineComponent({

  directives: { clickoutside: ClickOutside },

  components: { TimePickPanel, DateTable, ElInput, ElButton },

  props:{
    unlinkPanels: Boolean,
    parsedValue: {
      type: Array,
    },
    type: {
      type: String,
      required: true,
    },
  },

  emits: ['pick', 'set-picker-option'],

  setup(props, ctx) {
    const leftDate = ref(dayjs())
    const rightDate = ref(dayjs().add(1, 'month'))
    const minDate = ref(null)
    const maxDate = ref(null)
    const dateUserInput = ref({
      min: null,
      max: null,
    })

    console.log(leftDate, 'leftDate')

    const timeUserInput = ref({
      min: null,
      max: null,
    })

    const leftLabel = computed(() => {
      return leftDate.value.year() + ' ' + t('el.datepicker.year') + ' ' + t(`el.datepicker.month${ leftDate.value.month() + 1 }`)
    })

    const rightLabel = computed(() => {
      return rightDate.value.year() + ' ' + t('el.datepicker.year') + ' ' + t(`el.datepicker.month${ rightDate.value.month() + 1 }`)
    })

    const leftYear = computed(() => {
      return leftDate.value.year()
    })

    const leftMonth = computed(() => {
      return leftDate.value.month()
    })

    const rightYear = computed(() => {
      return rightDate.value.year()
    })

    const rightMonth = computed(() => {
      return rightDate.value.month()
    })

    const pickerBase = inject('EP_PICKER_BASE')
    const { shortcuts, disabledDate, cellClassName, format, defaultTime, defaultValue, arrowControl } = pickerBase.props

    const timeFormat = computed(() => {
      return extractTimeFormat(format)
    })
    
    const dateFormat = computed(() => {
      return extractDateFormat(format)
    })

    const hasShortcuts = computed(() => !!shortcuts.length)

    const minVisibleDate = computed(() => {
      if (dateUserInput.value.min !== null) return dateUserInput.value.min
      if (minDate.value) return minDate.value.format(dateFormat.value)
      return ''
    })

    const maxVisibleDate = computed(() => {
      if (dateUserInput.value.max !== null) return dateUserInput.value.max
      if (maxDate.value || minDate.value) return ((maxDate.value || minDate.value)).format(dateFormat.value)
      return ''
    })

    const minVisibleTime = computed(() => {
      if (timeUserInput.value.min !== null) return timeUserInput.value.min
      if (minDate.value) return minDate.value.format(timeFormat.value)
      return ''
    })

    const maxVisibleTime = computed(() => {
      if (timeUserInput.value.max !== null) return timeUserInput.value.max
      if (maxDate.value || minDate.value) return ((maxDate.value || minDate.value)).format(timeFormat.value)
      return ''
    })

    const leftPrevYear = () => {
      leftDate.value = leftDate.value.subtract(1, 'year')
      if (!props.unlinkPanels) {
        rightDate.value = leftDate.value.add(1, 'month')
      }
    }

    const leftPrevMonth = () => {
      leftDate.value = leftDate.value.subtract(1, 'month')
      if (!props.unlinkPanels) {
        rightDate.value = leftDate.value.add(1, 'month')
      }
    }

    const rightNextYear = () => {
      if (!props.unlinkPanels) {
        leftDate.value = leftDate.value.add(1, 'year')
        rightDate.value = leftDate.value.add(1, 'month')
      } else {
        rightDate.value = rightDate.value.add(1, 'year')
      }
    }

    const rightNextMonth = () => {
      if (!props.unlinkPanels) {
        leftDate.value = leftDate.value.add(1, 'month')
        rightDate.value = leftDate.value.add(1, 'month')
      } else {
        rightDate.value = rightDate.value.add(1, 'month')
      }
    }

    const leftNextYear = () => {
      leftDate.value = leftDate.value.add(1, 'year')
    }

    const leftNextMonth = () => {
      leftDate.value = leftDate.value.add(1, 'month')
    }

    const rightPrevYear = () => {
      rightDate.value = rightDate.value.subtract(1, 'year')
    }

    const rightPrevMonth = () => {
      rightDate.value = rightDate.value.subtract(1, 'month')
    }

    const enableMonthArrow = computed(() => {
      const nextMonth = (leftMonth.value + 1) % 12
      const yearOffset = leftMonth.value + 1 >= 12 ? 1 : 0
      return props.unlinkPanels && new Date(leftYear.value + yearOffset, nextMonth) < new Date(rightYear.value, rightMonth.value)
    })

    const enableYearArrow = computed(() => {
      return props.unlinkPanels && rightYear.value * 12 + rightMonth.value - (leftYear.value * 12 + leftMonth.value + 1) >= 12
    })

    const isValidValue = value => {
      return Array.isArray(value) &&
          value && value[0] && value[1] &&
          value[0].valueOf() <= value[1].valueOf()
    }

    const rangeState = ref({
      endDate: null,
      selecting: false,
    })

    const btnDisabled = computed(() => {
      return !(minDate.value && maxDate.value && !rangeState.value.selecting && isValidValue([minDate.value, maxDate.value]))
    })

    const handleChangeRange = val => {
      rangeState.value = val
    }

    const onSelect = selecting => {
      rangeState.value.selecting = selecting
      if (!selecting) {
        rangeState.value.endDate = null
      }
    }

    const handleConfirm = (visible = false) => {
      if (isValidValue([minDate.value, maxDate.value])) {
        ctx.emit('pick', [minDate.value, maxDate.value], visible)
      }
    }

    const formatEmit = (emitDayjs, index) => {
      if (!emitDayjs) return
      if (defaultTime) {
        const defaultTimeD = dayjs(defaultTime[index] || defaultTime)
        return defaultTimeD.year(emitDayjs.year()).month(emitDayjs.month()).date(emitDayjs.date())
      }
      return emitDayjs
    }

    const handleRangePick = (val, close = true) => {
      const minDate_ = formatEmit(val.minDate, 0)
      const maxDate_ = formatEmit(val.maxDate, 1)

      if (maxDate.value === maxDate_ && minDate.value === minDate_) {
        return
      }
      maxDate.value = maxDate_
      minDate.value = minDate_

      if (!close) return
      handleConfirm()
    }

    const handleShortcutClick = shortcut => {
      if (shortcut.value) {
        ctx.emit('pick', [dayjs(shortcut.value[0]), dayjs(shortcut.value[1])])
        return
      }
      if (shortcut.onClick) {
        shortcut.onClick(ctx)
      }
    }

    const minTimePickerVisible = ref(false)
    const maxTimePickerVisible = ref(false)

    const handleMinTimeClose = () => {
      minTimePickerVisible.value = false
    }

    const handleMaxTimeClose = () => {
      maxTimePickerVisible.value = false
    }

    const handleDateInput = (value, type) => {
      dateUserInput.value[type] = value
      const parsedValueD = dayjs(value, dateFormat.value)

      if (parsedValueD.isValid()) {
        if (disabledDate &&
            disabledDate(parsedValueD.toDate())) {
          return
        }
        if (type === 'min') {
          leftDate.value = parsedValueD
          minDate.value = (minDate.value || leftDate.value).year(parsedValueD.year()).month(parsedValueD.month()).date(parsedValueD.date())
          if (!props.unlinkPanels) {
            rightDate.value = parsedValueD.add(1, 'month')
            maxDate.value = minDate.value.add(1, 'month')
          }
        } else {
          rightDate.value = parsedValueD
          maxDate.value = (maxDate.value || rightDate.value).year(parsedValueD.year()).month(parsedValueD.month()).date(parsedValueD.date())
          if (!props.unlinkPanels) {
            leftDate.value = parsedValueD.subtract(1, 'month')
            minDate.value = maxDate.value.subtract(1, 'month')
          }
        }
      }
    }

    const handleDateChange = (value, type) => {
      dateUserInput.value[type] = null
    }

    const handleTimeInput = (value, type) => {
      timeUserInput.value[type] = value
      const parsedValueD = dayjs(value, timeFormat.value)

      if (parsedValueD.isValid()) {
        if (type === 'min') {
          minTimePickerVisible.value = true
          minDate.value = (minDate.value || leftDate.value).hour(parsedValueD.hour()).minute(parsedValueD.minute()).second(parsedValueD.second())
          if (!maxDate.value || maxDate.value.isBefore(minDate.value)) {
            maxDate.value = minDate.value
          }
        } else {
          maxTimePickerVisible.value = true
          maxDate.value = (maxDate.value || rightDate.value).hour(parsedValueD.hour()).minute(parsedValueD.minute()).second(parsedValueD.second())
          rightDate.value = maxDate.value
          if (maxDate.value && maxDate.value.isBefore(minDate.value)) {
            minDate.value = maxDate.value
          }
        }
      }
    }

    const handleTimeChange = (value, type) => {
      timeUserInput.value[type] = null
      if (type === 'min') {
        leftDate.value = minDate.value
        minTimePickerVisible.value = false
      } else {
        rightDate.value = maxDate.value
        maxTimePickerVisible.value = false
      }
    }



    const handleMinTimePick = (value, visible, first) => {
      if (timeUserInput.value.min) return
      if (value) {
        leftDate.value = value
        minDate.value = (minDate.value || leftDate.value).hour(value.hour()).minute(value.minute()).second(value.second())
      }

      if (!first) {
        minTimePickerVisible.value = visible
      }

      if (!maxDate.value || maxDate.value.isBefore(minDate.value)) {
        maxDate.value = minDate.value
      }
    }

    const handleMaxTimePick = (value, visible, first) => {
      if (timeUserInput.value.max) return
      if (value) {
        rightDate.value = value
        maxDate.value = (maxDate.value || rightDate.value).hour(value.hour()).minute(value.minute()).second(value.second())
      }

      if (!first) {
        maxTimePickerVisible.value = visible
      }

      if (maxDate.value && maxDate.value.isBefore(minDate.value)) {
        minDate.value = maxDate.value
      }
    }

    const getDefaultValue = () => {
      let start
      if (Array.isArray(defaultValue)) {
        const left = dayjs(defaultValue[0])
        let right = dayjs(defaultValue[1])
        if (!props.unlinkPanels) {
          right = left.add(1, 'month')
        }
        return [left, right]
      } else if (defaultValue) {
        start = dayjs(defaultValue)
      } else {
        start = dayjs()
      }
      return [start, start.add(1, 'month')]
    }

    const handleClear = () => {
      minDate.value = null
      maxDate.value = null
      leftDate.value = getDefaultValue()[0]
      rightDate.value = leftDate.value.add(1, 'month')
      ctx.emit('pick', null)
    }

    const formatToString = value => {
      return Array.isArray(value) ? value.map(_=> _.format(format)) : value.format(format)
    }

    const parseUserInput = value => {
      return Array.isArray(value) ? value.map(_=> dayjs(_, format)) : dayjs(value, format)
    }

    ctx.emit('set-picker-option', ['isValidValue', isValidValue])
    ctx.emit('set-picker-option', ['parseUserInput', parseUserInput])
    ctx.emit('set-picker-option', ['formatToString', formatToString])
    ctx.emit('set-picker-option', ['handleClear', handleClear])

    watch(() => props.parsedValue, newVal => {
      if (newVal && newVal.length === 2) {
        minDate.value = newVal[0]
        maxDate.value = newVal[1]
        leftDate.value = minDate.value
        if (props.unlinkPanels && maxDate.value) {
          const minDateYear = minDate.value.year()
          const minDateMonth = minDate.value.month()
          const maxDateYear = maxDate.value.year()
          const maxDateMonth = maxDate.value.month()
          rightDate.value = minDateYear === maxDateYear && minDateMonth === maxDateMonth
            ? maxDate.value.add(1, 'month')
            : maxDate.value
        } else {
          rightDate.value = leftDate.value.add(1, 'month')
        }
      } else {
        const defaultArr = getDefaultValue()
        leftDate.value = defaultArr[0]
        rightDate.value = defaultArr[1]
      }
    }, { immediate: true })

    return {
      shortcuts,
      disabledDate,
      cellClassName,
      minTimePickerVisible,
      maxTimePickerVisible,
      handleMinTimeClose,
      handleMaxTimeClose,
      handleShortcutClick,
      rangeState,
      minDate,
      maxDate,
      handleRangePick,
      onSelect,
      handleChangeRange,
      btnDisabled,
      enableYearArrow,
      enableMonthArrow,
      rightPrevMonth,
      rightPrevYear,
      rightNextMonth,
      rightNextYear,
      leftPrevMonth,
      leftPrevYear,
      leftNextMonth,
      leftNextYear,
      hasShortcuts,
      leftLabel,
      rightLabel,
      leftDate,
      rightDate,
      t,
      minVisibleDate,
      maxVisibleDate,
      minVisibleTime,
      maxVisibleTime,
      arrowControl,
      handleDateInput,
      handleDateChange,
      handleTimeInput,
      handleTimeChange,
      handleMinTimePick,
      handleMaxTimePick,
      handleClear,
      handleConfirm,
      timeFormat,
    }
  },
})
</script>
