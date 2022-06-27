<template>
  <div>
    <date-week-range
    v-model="test"
    :disabled-date="disabledDate"
    range-separator=";"
  ></date-week-range>
  </div>
</template>

<script>
import { ref } from 'vue'
// import { DateWeekRange, locale } from '../../src'
// import lang from 'element-plus/lib/locale/lang/zh-cn'
// import 'dayjs/locale/zh-cn'

// locale(lang)
export default {
  setup() {
    return {
      test: ref(['2021-04-12', '2021-04-16']),
      disabledDate(time) {
        return time.getTime() > Date.now()
      },
    }
  },
  // components: {
  //   DateWeekRange
  // }
}
</script>
