/*
 * @Date: 2020-09-21 00:02:55
 * @FilePath: \src\index.js
 * @LastEditors: sifan
 * @LastEditTime: 2020-09-21 00:35:18
 * @Description: init
 */
import Vue from 'vue';
import FormEngine from './form-engine';

export default {
  install() {
    Vue.component(FormEngine.name, FormEngine);
  }
}