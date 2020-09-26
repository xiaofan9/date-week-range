<template>
  <div id="app">
    <date-week-range
      v-model="test"
      :clearable='false'
      range-separator="-"
    ></date-week-range>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  test = [new Date(), new Date('2020-09-30')]
}
</script>

<style lang='scss'>

</style>
