<template>
  <table
    cellspacing="0"
    cellpadding="0"
    class="el-date-table"
    @click="handleClick"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseOut"
  >
    <tbody>
      <tr>
        <th v-if="showWeekNumber">{{ t('el.datepicker.week') }}</th>
        <th v-for="(week, key) in WEEKS" :key="key">{{ t('el.datepicker.weeks.' + week) }}</th>
      </tr>
      <tr
        v-for="(row, key) in rows"
        :key="key"
        class="el-date-table__row"
        :class="{ current: isWeekActive(row[1]) }"
      >
        <td
          v-for="(cell, key_) in row"
          :key="key_"
          :class="getCellClasses(cell)"
        >
          <div class="el-date-table-cell">
            <span class="el-date-table-cell__text">
              {{ cell.text }}
            </span>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { useLocale } from 'element-plus/lib/hooks/index'
import { handleWeekLastDay, handleWeekOneDay } from '../util';

import {
  defineComponent,
  computed,
  ref,
} from 'vue'
import dayjs from 'dayjs'

export default defineComponent({
  props: {
    date: {
      type: Object
    },
    minDate: {
      type: Object
    },
    maxDate: {
      type: Object
    },
    parsedValue: {
      type: [Object, Array]
    },
    showWeekNumber: {
      type: Boolean,
      default: false,
    },
    disabledDate: {
      type: Function,
    },
    cellClassName: {
      type: Function,
    },
    rangeState: {
      type: Object,
      default: () => ({
        endDate: null,
        selecting: false,
      }),
    },
  },

  emits: ['changerange', 'pick', 'select'],

  setup(props, ctx) {
    // data
    const lastRow = ref(null)
    const lastColumn = ref(null)
    const tableRows = ref([ [], [], [], [], [], [] ])
    const { t } = useLocale();

    // todo better way to get Day.js locale object
    const firstDayOfWeek = props.date.$locale().weekStart || 7
    const WEEKS_CONSTANT = props.date.locale('en').localeData().weekdaysShort().map(_=>_.toLowerCase())

    const offsetDay = computed(() => {
      // Sunday 7(0), cal the left and right offset days, 3217654, such as Monday is -1, the is to adjust the position of the first two rows of dates
      return firstDayOfWeek > 3 ? 7 - firstDayOfWeek : -firstDayOfWeek
    })

    const startDate = computed(() => {
      const startDayOfMonth = props.date.startOf('month')
      return startDayOfMonth.subtract(startDayOfMonth.day() || 7, 'day')
    })

    const WEEKS = computed(() => {
      return WEEKS_CONSTANT.concat(WEEKS_CONSTANT).slice(firstDayOfWeek, firstDayOfWeek + 7)
    })

    const isWeekActive = cell => {
      let newDate = props.date.startOf('day')

      if (cell.type === 'prev-month') {
        newDate = newDate.subtract(1, 'month')
      }

      if (cell.type === 'next-month') {
        newDate = newDate.add(1, 'month')
      }

      newDate = newDate.date(parseInt(cell.text, 10))

      if (props.parsedValue && !Array.isArray(props.parsedValue)) {
        const dayOffset = (props.parsedValue.day() - firstDayOfWeek + 7) % 7 - 1
        const weekDate = props.parsedValue.subtract(dayOffset, 'day')
        return weekDate.isSame(newDate, 'day')
      }
      return false
    }

    const moveDate = ref(null);
    const disabledWeek = ref(null);

    const rows = computed(() =>  {
      // TODO: refactory rows / getCellClasses
      const startOfMonth = props.date.startOf('month')
      const startOfMonthDay = startOfMonth.day() || 7 // day of first day
      const dateCountOfMonth = startOfMonth.daysInMonth()
      const dateCountOfLastMonth = startOfMonth.subtract(1, 'month').daysInMonth()

      const offset = offsetDay.value
      const rows_ = tableRows.value
      let count = 1

      const calNow = dayjs().startOf('day')

      for (let i = 0; i < 6; i++) {
        const row = rows_[i]

        if (props.showWeekNumber) {
          if (!row[0]) {
            row[0] = {
              type: 'week',
              text: startDate.value.add(i * 7 + 1, 'day').week(),
            }
          }
        }

        for (let j = 0; j < 7; j++) {
          let cell = row[props.showWeekNumber ? j + 1 : j]
          if (!cell) {
            cell = {
              row: i,
              column: j,
              type: 'normal',
              inRange: false,
              start: false,
              end: false,
            }
          }
          const index = i * 7 + j
          const calTime = startDate.value.add(index - offset, 'day')
          cell.type = 'normal'

          const calEndDate = props.rangeState.endDate || props.maxDate
            || props.rangeState.selecting && props.minDate

          cell.inRange = (
            props.minDate &&
              calTime.isSameOrAfter(props.minDate, 'day')
          ) && (calEndDate &&
              calTime.isSameOrBefore(calEndDate, 'day')
          ) || (
            props.minDate &&
            calTime.isSameOrBefore(props.minDate, 'day')
          ) && (calEndDate &&
            calTime.isSameOrAfter(calEndDate, 'day')
          ) || moveDate.value && calTime.isSameOrAfter(moveDate.value, 'week') && calTime.isSameOrBefore(moveDate.value, 'week')

          // 最开始选中的日期是否在移动中的日期之前
          if (props.minDate?.isSameOrAfter(calEndDate)) {
            cell.start = calEndDate && calTime.isSame(calEndDate, 'day')
            cell.end = props.minDate && calTime.isSame(props.minDate, 'day')
          } else {
            cell.start = props.minDate && calTime.isSame(props.minDate, 'day')
            cell.end = calEndDate && calTime.isSame(calEndDate, 'day')
          }

          const isToday = calTime.isSame(calNow, 'day')

          if (isToday) {
            cell.type = 'today'
          }

          if (i >= 0 && i <= 1) {
            const numberOfDaysFromPreviousMonth = startOfMonthDay + offset < 0 ? 7 + startOfMonthDay + offset : startOfMonthDay + offset

            if (j + i * 7 >= numberOfDaysFromPreviousMonth) {
              cell.text = count++
            } else {
              cell.text = dateCountOfLastMonth - (numberOfDaysFromPreviousMonth - j % 7) + 1 + i * 7
              cell.type = 'prev-month'
            }
          } else {
            if (count <= dateCountOfMonth) {
              cell.text = count++
            } else {
              cell.text = count++ - dateCountOfMonth
              cell.type = 'next-month'
            }
          }

          const cellDate = calTime.toDate()
          cell.selected = false
          cell.disabled = props.disabledDate && props.disabledDate(cellDate)

          if(cell.disabled) {
            if(!disabledWeek.value) {
              // eslint-disable-next-line vue/no-side-effects-in-computed-properties
              disabledWeek.value = calTime.week();
            }

            if(disabledWeek.value === calTime.week()) {
              cell.disabled = false;
            }
          }
          cell.customClass = props.cellClassName && props.cellClassName(cellDate)
          row[props.showWeekNumber ? j + 1 : j] = cell
        }
      }

      return rows_
    })

    const cellMatchesDate = (cell, date) => {
      if (!date) return false
      return dayjs(date)
        .isSame(
          props.date.date(Number(cell.text))
          , 'day',
        )
    }

    const getCellClasses = cell => {
      const classes = []
      if ((cell.type === 'normal' || cell.type === 'today') && !cell.disabled) {
        classes.push('available')
        if (cell.type === 'today') {
          classes.push('today')
        }
      } else {
        classes.push(cell.type)
      }

      if ((cell.type === 'normal' || cell.type === 'today') && cellMatchesDate(cell, props.parsedValue)) {
        classes.push('current')
      }

      if (cell.inRange && ((cell.type === 'normal' || cell.type === 'today'))) {
        classes.push('in-range')

        if (cell.start) {
          classes.push('start-date')
        }

        if (cell.end) {
          classes.push('end-date')
        }
      }

      if (cell.disabled) {
        classes.push('disabled')
      }

      if (cell.selected) {
        classes.push('selected')
      }

      if (cell.customClass) {
        classes.push(cell.customClass)
      }

      return classes.join(' ')
    }

    const getDateOfCell = (row, column) => {
      const offsetFromStart = row * 7 + (column - (props.showWeekNumber ? 1 : 0)) - offsetDay.value
      return startDate.value.add(offsetFromStart, 'day')
    }

    const handleMouseMove = event => {
      let target = event.target
      if (target.tagName === 'SPAN') {
        target = target.parentNode.parentNode
      }
      if (target.tagName === 'DIV') {
        target = target.parentNode
      }
      if (target.tagName !== 'TD') return

      const row = target.parentNode.rowIndex - 1
      const column = target.cellIndex

      if (!props.rangeState.selecting) {
        moveDate.value = getDateOfCell(row, column)

        return
      } 
      moveDate.value = null;

      // can not select disabled date
      if (rows.value[row][column].disabled) return

      // only update rangeState when mouse moves to a new cell
      // this avoids frequent Date object creation and improves performance
      if (row !== lastRow.value || column !== lastColumn.value) {
        lastRow.value = row
        lastColumn.value = column

        let endDate = getDateOfCell(row, column);
        let minDate = props.minDate;

        const minDay = minDate.day() || 7;
        const endDay = endDate.day() || 7;

        if(!endDate.isSameOrAfter(props.minDate)) {
          console.log(1, endDate.format('YYYY-MM-DD'));
          if(endDay < firstDayOfWeek) {
            // endDate = endDate.subtract(1, 'week')
          }

          if(minDay === firstDayOfWeek) {
            minDate = handleWeekLastDay(minDate);
          }

          endDate = handleWeekOneDay(endDate, false);
        } else {
          if(minDate.day() === firstDayOfWeek - 1) {
            minDate = handleWeekOneDay(minDate);
          }

          if(endDay < firstDayOfWeek) {
            // endDate = endDate.subtract(1, 'week')
          }

          endDate = handleWeekLastDay(endDate);
        }

        ctx.emit('pick', { minDate, maxDate: null })
        ctx.emit('changerange', {
          selecting: true,
          endDate,
        })
      }
    }

    const handleMouseOut = () => {
      moveDate.value = null;
    }

    const handleClick = event => {
      let target = event.target
      if (target.tagName === 'SPAN') {
        target = target.parentNode.parentNode
      }
      if (target.tagName === 'DIV') {
        target = target.parentNode
      }

      if (target.tagName !== 'TD') return

      const row = target.parentNode.rowIndex - 1
      const column = target.cellIndex
      const cell = rows.value[row][column]

      if (cell.disabled || cell.type === 'week') return

      const tmpNewDate = getDateOfCell(row, column);

      const newDate = handleWeekOneDay(tmpNewDate)

      moveDate.value = null;
      if (!props.rangeState.selecting) {
        ctx.emit('pick', { minDate: newDate, maxDate: handleWeekLastDay(tmpNewDate) }, false)
        ctx.emit('select', true)
      } else {
        if (tmpNewDate >= props.minDate) {
          ctx.emit('pick', { minDate: handleWeekOneDay(props.minDate), maxDate: handleWeekLastDay(tmpNewDate) })
        } else {
          ctx.emit('pick', { minDate: handleWeekOneDay(tmpNewDate), maxDate:  handleWeekOneDay(props.minDate) })
        }
        ctx.emit('select', false)
      }
    }

    return {
      handleMouseMove,
      handleMouseOut,
      t,
      rows,
      isWeekActive,
      getCellClasses,
      WEEKS,
      handleClick,
    }
  },
})
</script>
