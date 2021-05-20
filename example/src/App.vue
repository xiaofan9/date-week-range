<template>
  <div>
    <date-week-range
    v-model="test"
    :disabled-date="disabledDate"
    range-separator=";"
  ></date-week-range>
  <el-date-picker
    v-model="test"
    type="daterange"
    range-separator="666"
    start-placeholder="开始日期"
    end-placeholder="结束日期">
  </el-date-picker>
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
