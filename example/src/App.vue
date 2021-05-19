<template>
  <div>
    <date-week-range
    v-model="test"
    :clearable='false'
    range-separator="-"
    type="daterange"
  ></date-week-range>
  <el-date-picker
    v-model="test"
    type="daterange"
    start-placeholder="开始日期"
    end-placeholder="结束日期">
  </el-date-picker>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    return {
      test: ref(['2021-04-12', '2021-04-16'])
    }
  },
}
</script>
