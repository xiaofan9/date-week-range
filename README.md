# date-week-range（周选择器）

> 基于 element-ui 2.x 开发

## 目的

- 项目需求，需要用到周选择器这功能，但没找到相应的组件库，故自己基于element-ui改造了个。

## 兼容

  - 当前版本暂不支持 vue3.0+
  
## 示例地址

https://cqe2b.csb.app/

## 计划

  - ~~1.x 版本，支持 vue2（已完成）~~
  - 2.x 版本，将进行支持 vue3，计划通过 @next 方式升级使用
  - 终版，计划集合进 element-plus 中

## 优化
  - 通过配置，剔除一些不必引入文件（css、polyfill等）

## 安装 && 引入

> * 安装
``` bash
npm install date-week-range --save
```
> * 注册

全局注册

```javascript
import dateWeekRange from 'date-week-range';
import Vue from 'vue';

Vue.use(dateWeekRange);
```

局部引入

```javascript
<script>
import dateWeekRange from 'date-week-range';

export default {
  components: {
    dateWeekRange
  }
}
</script>
```

直接引入

```html
<script src="https://unpkg.com/date-week-range"></script>
```

> * 使用

```html
  <date-week-range 
    v-model="test" 
    ...
  >
  </date-week-range>
```

## 配置

组件配置和 [element-ui 中的DatePicker组件](https://element.eleme.cn/#/zh-CN/component/date-picker) type="daterange" 配置相同。
