<template>
  <div id="app">
    <date-week-range
      v-model="test"
      :clearable='false'
      range-separator="-"
      :picker-options="{firstDayOfWeek: 7}"
    ></date-week-range>
    <DateWeekRange></DateWeekRange>
  </div>
</template>

<script>
import { DateWeekRange, locale } from '../../src'
import lang from 'element-ui/lib/locale/lang/en'

locale.use(lang)
export default {
  data() {
    return {
      test: ['2022-01-01', '2022-02-02']
    }
  },
  components: {
    DateWeekRange
  }
}
</script>
