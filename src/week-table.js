import DateTable from 'element-ui/packages/date-picker/src/basic/date-table.vue';
import { getFirstDayOfMonth, getDayCountOfMonth, getWeekNumber, prevDate, nextDate, isDate, clearTime as _clearTime } from 'element-ui/src/utils/date-util';
import { arrayFind } from 'element-ui/src/utils/util';

const getDateTimestamp = function(time) {
  if (typeof time === 'number' || typeof time === 'string') {
    return _clearTime(new Date(time)).getTime();
  } else if (time instanceof Date) {
    return _clearTime(time).getTime();
  } else {
    return NaN;
  }
};

export default {
  mixins: [DateTable],
  computed: {
    minDateTimestamp() {
      return getDateTimestamp(this.minDate)
    },
    maxDateTimestamp() {
      return getDateTimestamp(this.maxDate)
    },
    rows() {
      // TODO: refactory rows / getCellClasses
      const date = new Date(this.year, this.month, 1);
      let day = getFirstDayOfMonth(date); // day of first day
      const dateCountOfMonth = getDayCountOfMonth(date.getFullYear(), date.getMonth());
      const dateCountOfLastMonth = getDayCountOfMonth(date.getFullYear(), (date.getMonth() === 0 ? 11 : date.getMonth() - 1));

      day = (day === 0 ? 7 : day);

      const offset = this.offsetDay;
      const rows = this.tableRows;
      let count = 1;

      const startDate = this.startDate;
      const disabledDate = this.disabledDate;
      const cellClassName = this.cellClassName;
      const selectedDate = [];
      const now = getDateTimestamp(new Date());

      for (let i = 0; i < 6; i++) {
        const row = rows[i];

        if (this.showWeekNumber) {
          if (!row[0]) {
            row[0] = { type: 'week', text: getWeekNumber(nextDate(startDate, i * 7 + 1)) };
          }
        }

        for (let j = 0; j < 7; j++) {
          let cell = row[this.showWeekNumber ? j + 1 : j];
          if (!cell) {
            cell = { row: i, column: j, type: 'normal', inRange: false, start: false, end: false };
          }

          cell.type = 'normal';

          const index = i * 7 + j;
          const time = nextDate(startDate, index - offset).getTime();
          cell.inRange = time >= this.minDateTimestamp && time <= this.maxDateTimestamp;
          cell.start = this.minDate && time === this.minDateTimestamp;
          cell.end = this.maxDate && time === this.maxDateTimestamp;
          const isToday = time === now;

          if (isToday) {
            cell.type = 'today';
          }

          if (i >= 0 && i <= 1) {
            const numberOfDaysFromPreviousMonth = day + offset < 0 ? 7 + day + offset : day + offset;

            if (j + i * 7 >= numberOfDaysFromPreviousMonth) {
              cell.text = count++;
            } else {
              cell.text = dateCountOfLastMonth - (numberOfDaysFromPreviousMonth - j % 7) + 1 + i * 7;
              cell.type = 'prev-month';
            }
          } else {
            if (count <= dateCountOfMonth) {
              cell.text = count++;
            } else {
              cell.text = count++ - dateCountOfMonth;
              cell.type = 'next-month';
            }
          }

          const cellDate = new Date(time);
          cell.disabled = typeof disabledDate === 'function' && disabledDate(cellDate);
          cell.selected = arrayFind(selectedDate, date => date.getTime() === cellDate.getTime());
          cell.customClass = typeof cellClassName === 'function' && cellClassName(cellDate);
          this.$set(row, this.showWeekNumber ? j + 1 : j, cell);
        }
      }

      return rows;
    }
  },
  methods: {
    getCellClasses(cell) {
      const defaultValue = this.defaultValue ? Array.isArray(this.defaultValue) ? this.defaultValue : [this.defaultValue] : [];

      const classes = [];
      if ((cell.type === 'normal' || cell.type === 'today') && !cell.disabled) {
        classes.push('available');
        if (cell.type === 'today') {
          classes.push('today');
        }
      } else {
        classes.push(cell.type);
      }

      if (cell.type === 'normal' && defaultValue.some(date => this.cellMatchesDate(cell, date))) {
        classes.push('default');
      }

      if (cell.inRange && ((cell.type === 'normal' || cell.type === 'today')) ) {
        if(isDate(this.minDate) && isDate(this.maxDate) || this.rangeState.selecting) {
          classes.push('in-range');
        }

        if (cell.start) {
          classes.push('start-date');
        } else if (cell.end) {
          classes.push('end-date');
        }
      }

      if (cell.disabled) {
        classes.push('disabled');
      }

      if (cell.selected) {
        classes.push('selected');
      }

      if (cell.customClass) {
        classes.push(cell.customClass);
      }

      return classes.join(' ');
    },
    isWeekActive(cell) {
      const newDate = new Date(this.year, this.month, 1);
      const year = newDate.getFullYear();
      const month = newDate.getMonth();

      if (cell.type === 'prev-month') {
        newDate.setMonth(month === 0 ? 11 : month - 1);
        newDate.setFullYear(month === 0 ? year - 1 : year);
      }

      if (cell.type === 'next-month') {
        newDate.setMonth(month === 11 ? 0 : month + 1);
        newDate.setFullYear(month === 11 ? year + 1 : year);
      }

      newDate.setDate(parseInt(cell.text, 10));

      if (isDate(this.value)) {
        const dayOffset = (this.value.getDay() - this.firstDayOfWeek + 7) % 7 - 1;
        const weekDate = prevDate(this.value, dayOffset);
        return weekDate.getTime() === newDate.getTime();
      }
      return false;
    },
    handleMouseMove(event, isManual) {
      if (!this.rangeState.selecting) return;

      let target = event.target;
      if (target.tagName === 'SPAN') {
        target = target.parentNode.parentNode;
      }
      if (target.tagName === 'DIV') {
        target = target.parentNode;
      }
      if (target.tagName !== 'TD') return;

      const row = target.parentNode.rowIndex - 1;

      const isMinGreatMax = +new Date(this.rangeState.startDate) >= +new Date(this.getDateOfCell(row, 6));

      let column = isMinGreatMax ? 0 : 6;

      const findIndex = this.rows[row].findIndex(item => !item.disabled);
      const isExistDis = this.rows[row].some(item => item.disabled);

      if(isExistDis && findIndex >= 0) {
        column = findIndex;
      }

      // can not select disabled date
      if (this.rows[row][column].disabled) return;

      // only update rangeState when mouse moves to a new cell
      // this avoids frequent Date object creation and improves performance
      if (row !== this.lastRow || column !== this.lastColumn) {
        const minDateList = this.rangeState.minDateList;
        const endDate = this.getDateOfCell(row, column);

        if(!isManual) {
          if(isMinGreatMax && !this.isMinGreatMax && minDateList.length === 2 || this.minDate.getTime() > endDate.getTime()) {
            this.$emit('pick', {minDate: minDateList[1], maxDate: null});

            this.isMinGreatMax = true;
          } else if(this.isMinGreatMax && !isMinGreatMax || this.minDate.getTime() < endDate.getTime()) {
            this.$emit('pick', {minDate: minDateList[0], maxDate: null});

            this.isMinGreatMax = false;
          }
        }

        this.$nextTick(() => {
          this.$emit('changerange', {
            minDate: this.minDate,
            maxDate: this.maxDate,
            rangeState: {
              selecting: true,
              endDate,
              startDate: this.rangeState.startDate,
              minDateList: this.rangeState.minDateList
            }
          });

          this.lastRow = row;
          this.lastColumn = target.cellIndex;
        })
      }
    },
    handleClick(event) {
      let target = event.target;
      if (target.tagName === 'SPAN') {
        target = target.parentNode.parentNode;
      }
      if (target.tagName === 'DIV') {
        target = target.parentNode;
      }

      if (target.tagName !== 'TD') return;

      const row = target.parentNode.rowIndex - 1;
      let column =this.rangeState.selecting ? 6 : 0;

      const findIndex = this.rows[row].findIndex(item => !item.disabled);
      const isExistDis = this.rows[row].some(item => item.disabled);

      if(this.rangeState.startDate && this.rangeState.selecting) {
        column = +new Date(this.rangeState.startDate) >= +new Date(this.getDateOfCell(row, 6)) ? 0 : 6;
      }

      if(isExistDis && findIndex >= 0) {
        column = findIndex;
      }

      const cell = this.rows[row][column];

      if (cell.disabled || cell.type === 'week') return;

      const newDate = this.getDateOfCell(row, column);

      if (!this.rangeState.selecting) {
        this.rangeState.startDate = newDate;
        this.rangeState.minDateList = [
          this.getDateOfCell(row, 0),
          this.getDateOfCell(row, 6)
        ];

        this.$emit('pick', {minDate: newDate, maxDate: null});
        this.rangeState.selecting = true;

        this.$nextTick(() =>{
          this.handleMouseMove({
            target: {
              tagName:'TD',
              parentNode: {
                rowIndex: row + 1,
                cellIndex: column
              }
            }
          }, true)
        })
      } else {
        if (newDate >= this.minDate) {
          this.$emit('pick', {minDate: this.minDate, maxDate: newDate});
        } else {
          this.$emit('pick', {minDate: newDate, maxDate: this.minDate});
        }
        this.rangeState.selecting = false;
      } 
    }
  }
}