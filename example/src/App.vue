<template>
  <date-week-range
    v-model="test"
    :clearable='false'
    range-separator="-"
    type="daterange"
  ></date-week-range>
</template>

<script>
import { reactive } from 'vue'

export default {
  setup() {
    const test = reactive([new Date(), new Date()]);

    return {
      test
    }
  },
}
</script>
