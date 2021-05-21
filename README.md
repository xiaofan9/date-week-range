## date-week-range（周范围选择器）

> v1 版本基于 element-ui 2.x 开发，可依赖 element-ui 2.x 使用；也可独立使用，但要引入相应的样式

> v2 版本基于 element-plus 开发。可依赖 element-plus 使用；也可独立使用，但要引入相应的样式。

[v2 版本传送门](https://github.com/xiaofan9/date-week-range/tree/v2)

### 示例

https://codepen.io/xiaofan9/pen/jOByExo

### 目的

  - 项目需求，需要用到周选择器这功能，但没找到相应的组件库，故自己基于 element-ui/element-plus 改造了个。


### 兼容

  - v1 版本，对应v1分支，仅支持vue2
  - v2 版本，对应v2分支，仅支持vue3

### 计划

  - ~~1.x 版本，支持 vue2（已完成）~~
  - ~~2.x 版本，将进行支持 vue3，计划通过 date-week-range@next 方式升级使用。~~
  - 等待vue3稳定，将会把主版本从 v1 切换至 v2 ，master 分支亦将会同步成 v2 分支。

### 注意

  - 不会自动注入css，需手动引入，以避免出现样式覆盖情况；如果全局引入了 element-ui 样式，则不需额外引入！
  
  - 本地开发模式，默认使用esm模块，如需转义成es5，请参考：
  
  ```javascript
    // 在 vue-cli 将指定的 node_modules 模块转义成es5：
    // vue.config.js
    module.exports = {
      // 省略代码
      transpileDependencies: ['date-week-range', 'element-ui']
    }
  ```

### 安装 && 引入

> * #### 安装

``` bash
npm install date-week-range --save
yarn add date-week-range --save
```
> * #### 注册

##### 全局注册

```javascript
import DateWeekRange from 'date-week-range'
import Vue from 'vue'

// 引入样式。如果全局引入了 element-ui 样式，则不需额外引入
// 全局引入 element-ui 样式
import 'element-ui/lib/theme-chalk/index.css'

// 或者额外引入
// import 'element-ui/lib/theme-chalk/icon.css'
// import 'element-ui/lib/theme-chalk/date-picker.css'

Vue.use(DateWeekRange)
```

##### 局部注册

```javascript
<template>
  <DateWeekRange v-model="test"></DateWeekRange>
</template>

<script>
import { DateWeekRange } from 'date-week-range'
// 注意要引入样式！引入方式参考上面

export default {
  data() {
    return {
      test: ''
    }
  },
  components: {
    DateWeekRange
  }
}
</script>
```

##### 浏览器使用

```html
<!-- 引入样式；如果全局引入了element-ui 样式，则不需额外引入 -->
<!-- 全局引入 element-ui 样式 -->
<link type="text/css" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
<!-- 或者额外引入 -->
<link type="text/css" href="https://unpkg.com/element-ui/lib/theme-chalk/icon.css">
<link type="text/css" href="https://unpkg.com/element-ui/lib/theme-chalk/date-picker.css">

<script src="https://unpkg.com/date-week-range"></script>
```

### 国际化

> 默认使用中文

全局注册时
```javascript
import Vue from 'vue'
import locale from 'element-ui/lib/locale/lang/en'
import DateWeekRange from 'date-week-range'

Vue.use(DateWeekRange, { locale })
```

局部注册时
```javascript
<script>
import { DateWeekRange, locale } from 'date-week-range'
import lang from 'element-ui/lib/locale/lang/en'

lang.use(lang)
/* 省略… */
</script>
```

### 文档

本插件是在 element-ui 框架中的 el-date-picker 组件基础上进行开发，其文档和 [el-date-picker组件](https://element.eleme.cn/#/zh-CN/component/date-picker) type="daterange" 一致。
