<template>
  <div id="app">
    <date-week-range
      v-model="test"
      :clearable='false'
      range-separator="-"
    ></date-week-range>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: [new Date()]
    }
  }
}
</script>
