<template>
  <div id="app">
    <DateWeekRange
      v-model="test"
      :clearable='false'
      range-separator="-"
      :picker-options="{firstDayOfWeek: 7}"
      value-format="yyyy-WW"
    ></DateWeekRange>
  </div>
</template>

<script>
import { DateWeekRange } from '../../src'

export default {
  data() {
    return {
      test: ['2022-01-01', '2022-02-02']
    }
  },
  components: {
    DateWeekRange
  },
  watch: {
    test() {
      console.log(this.test)
    }
  }
}
</script>
