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
            >
              <el-icon
                :class="['arrow-down']"
              >
                <DArrowLeft />
              </el-icon>
            </button>
            <button
              type="button"
              class="el-picker-panel__icon-btn el-icon-arrow-left"
              @click="leftPrevMonth"
            >
               <el-icon
                :class="['arrow-down']"
              >
                <ArrowLeft />
              </el-icon>
            </button>
            <template v-if="unlinkPanels">
              <button
                type="button"
                :disabled="!enableYearArrow"
                :class="{ 'is-disabled': !enableYearArrow }"
                class="el-picker-panel__icon-btn el-icon-d-arrow-right"
                @click="leftNextYear"
              >
                <el-icon>
                  <DArrowRight />
                </el-icon>
              </button>
              <button
                type="button"
                :disabled="!enableMonthArrow"
                :class="{ 'is-disabled': !enableMonthArrow }"
                class="el-picker-panel__icon-btn el-icon-arrow-right"
                @click="leftNextMonth"
              >
                <el-icon>
                  <ArrowRight />
                </el-icon>
              </button>
            </template>
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
            <template v-if="unlinkPanels">
              <button
                type="button"
                :disabled="!enableYearArrow"
                :class="{ 'is-disabled': !enableYearArrow }"
                class="el-picker-panel__icon-btn el-icon-d-arrow-left"
                @click="rightPrevYear"
              >
                <el-icon>
                  <DArrowLeft />
                </el-icon>
              </button>
              <button
                type="button"
                :disabled="!enableMonthArrow"
                :class="{ 'is-disabled': !enableMonthArrow }"
                class="el-picker-panel__icon-btn el-icon-arrow-left"
                @click="rightPrevMonth"
              >
                <el-icon>
                  <ArrowLeft />
                </el-icon>
              </button>
            </template>
            <button
              type="button"
              class="el-picker-panel__icon-btn el-icon-d-arrow-right"
              @click="rightNextYear"
            >
               <el-icon>
                <DArrowRight />
              </el-icon>
            </button>
            <button
              type="button"
              class="el-picker-panel__icon-btn el-icon-arrow-right"
              @click="rightNextMonth"
            >
               <el-icon>
                <ArrowRight />
              </el-icon>
            </button>
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
import { useLocale } from 'element-plus/lib/hooks/index'
import { ClickOutside } from 'element-plus/lib/directives/index'
import dayjs from 'dayjs'
import DateTable from './basic-date-table.vue'
import { handleDate } from '../util';
import { ElIcon } from 'element-plus'
import { ArrowLeft, ArrowRight, DArrowLeft, DArrowRight } from '@element-plus/icons-vue'

export default defineComponent({

  directives: { clickoutside: ClickOutside },

  components: { DateTable, ElIcon, ArrowLeft, ArrowRight, DArrowLeft, DArrowRight },

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
    const { t } = useLocale();

    const leftDate = ref(dayjs())
    const rightDate = ref(dayjs().add(1, 'month'))
    const minDate = ref(null)
    const maxDate = ref(null)

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
    const { shortcuts, disabledDate, cellClassName, format, defaultTime, defaultValue } = pickerBase.props

    const hasShortcuts = computed(() => !!shortcuts.length)

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
        minDate.value = handleDate(newVal[0], false)
        maxDate.value = handleDate(newVal[1], true)

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
      handleShortcutClick,
      rangeState,
      minDate,
      maxDate,
      handleRangePick,
      onSelect,
      handleChangeRange,
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
    }
  },
})
</script>
