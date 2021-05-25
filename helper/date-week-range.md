## DateWeekRange

Use the selector to select the range of weeks.


### Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value / v-model | binding value | date(DatePicker) / array(DateRangePicker) | — | — |
| readonly | whether DatePicker is read only | boolean | — | false |
| disabled | whether DatePicker is disabled | boolean | — | false |
| size | size of Input | string | large/medium/small/mini  | large |
| editable | whether the input is editable | boolean | — | true |
| clearable | whether to show clear button | boolean | — | true |
| placeholder | placeholder in non-range mode | string | — | — |
| start-placeholder | placeholder for the start date in range mode | string | — | — |
| end-placeholder | placeholder for the end date in range mode | string | — | — |
| format | format of the displayed value in the input box | string | see [date formats](https://element-plus.org/#/en-US/component/date-picker#date-formats) | YYYY-MM-DD |
| align | alignment | — | left/center/right | left |
| popper-class | custom class name for DatePicker's dropdown | string | — | — |
| range-separator | range separator | string | — | '-' |
| default-value | optional, default date of the calendar | Date | anything accepted by `new Date()` | — |
| default-time | optional, the time value to use when selecting date range | Date[] | Array with length 2, each item is a Date. The first item for the start date and then second item for the end date | — |
| name | same as `name` in native input | string | — | — |
| unlink-panels | unlink two date-panels in range-picker | boolean | — | false |
| prefix-icon | Custom prefix icon class | string | — | el-icon-date |
| clear-icon | Custom clear icon class | string | — | el-icon-circle-close |
| validate-event | whether to trigger form validation | boolean | - | true |
| disabledDate | a function determining if a date is disabled with that date as its parameter. Should return a Boolean | function | — | — |
| shortcuts | an object array to set shortcut options | object[{ text: string, value: Date }] | — | — |

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
