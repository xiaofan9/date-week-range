
## DateWeekRange

This is a week range selector.

### Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value / v-model | binding value | date(DatePicker) / array(DateRangePicker) | — | — |
| readonly | whether DatePicker is read only | boolean | — | false |
| disabled | whether DatePicker is disabled | boolean | — | false |
| size | size of Input | string | large/small/mini | — |
| editable | whether the input is editable | boolean | — | true |
| clearable | whether to show clear button | boolean | — | true |
| placeholder | placeholder in non-range mode | string | — | — |
| start-placeholder | placeholder for the start date in range mode | string | — | — |
| end-placeholder | placeholder for the end date in range mode | string | — | — |
| format | format of the displayed value in the input box | string | see [date formats](https://element.eleme.cn/#/en-US/component/date-picker#date-formats) | yyyy-MM-dd |
| align | alignment | left/center/right | left |
| popper-class | custom class name for DatePicker's dropdown | string | — | — |
| picker-options | additional options, check the table below | object | — | {} |
| range-separator | range separator | string | — | '-' |
| default-value | optional, default date of the calendar | Date | anything accepted by `new Date()` | — |
| default-time | optional, the time value to use when selecting date range | string[] | Array with length 2, each item is a string like `12:00:00`. The first item for the start date and then second item for the end date | — |
| value-format | optional, format of binding value. If not specified, the binding value will be a Date object | string | see [date formats](https://element.eleme.cn/#/en-US/component/date-picker#date-formats) | — |
| name | same as `name` in native input | string | — | — |
| unlink-panels | unlink two date-panels in range-picker | boolean | — | false |
| prefix-icon | Custom prefix icon class | string | — | el-icon-date |
| clear-icon | Custom clear icon class | string | — | el-icon-circle-close |
| validate-event | whether to trigger form validation | boolean | - | true |

### Picker Options
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| shortcuts | a { text, onClick } object array to set shortcut options, check the table below | object[] | — | — |
| disabledDate | a function determining if a date is disabled with that date as its parameter. Should return a Boolean | function | — | — |
| cellClassName | set custom className | Function(Date) | — | — |
| firstDayOfWeek | first day of week | Number | 1 to 7 | 7 |
| onPick | a callback that triggers when the selected date is changed. Only for `daterange` and `datetimerange`. | Function({ maxDate, minDate }) | - | - |

### shortcuts
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| text | title of the shortcut | string | — | — |
| onClick | callback function, triggers when the shortcut is clicked, with the `vm` as its parameter. You can change the picker value by emitting the `pick` event. Example: `vm.$emit('pick', new Date())`| function | — | — |


### Events
| Event Name | Description | Parameters |
|---------|--------|---------|
| change | triggers when user confirms the value | component's binding value |
| blur | triggers when Input blurs | component instance |
| focus | triggers when Input focuses | component instance |

### Methods
| Method | Description | Parameters |
|------|--------|-------|
| focus | focus the Input component | — |

### Slots
| Name    | Description |
|---------|-------------|
| range-separator  | custom range separator content |
