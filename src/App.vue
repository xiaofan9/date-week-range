<template>
  <div id="app">
    <form-engine :config="config"></form-engine>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  config = [
    {
      label: 'test1',
      prop: 'test1'
    }
  ]
}
</script>

<style lang='scss'>

</style>
