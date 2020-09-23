/*
 * @Date: 2020-09-21 00:02:55
 * @FilePath: \src\index.ts
 * @LastEditors: sifan
 * @LastEditTime: 2020-09-22 15:12:36
 * @Description: init
 */
import Vue from 'vue'
import FormEngine from './form-engine.vue'

export default {
  install() {
    Vue.component(FormEngine.name, FormEngine)
  }
}
