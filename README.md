# vue-waterfall-adaptive

[![npm](https://img.shields.io/npm/v/vue-waterfall-adaptive.svg)](https://www.npmjs.com/package/vue-waterfall-adaptive)
[![npm](https://img.shields.io/npm/dt/vue-waterfall-adaptive.svg)](https://www.npmjs.com/package/vue-waterfall-adaptive)
[![npm](https://img.shields.io/npm/l/vue-waterfall-adaptive.svg)](https://www.npmjs.com/package/vue-waterfall-adaptive)

## 概述
> vue 瀑布流组件，高度自适应，响应式，支持自定义布局，支持多图模式

[demo](https://geng452654716.github.io/vue-waterfall/dist/)

## 安装

### 安装 vue-waterfall-adaptive

```sh
npm install vue-waterfall-adaptive
```

### 加载 vue-waterfall-adaptive 模块

支持 ES6 与 commonjs 的加载方式

```js
// ES6
import { waterfall, waterfallSilde } from 'vue-waterfall-adaptive';

// commonjs
const waterfall = require("vue-waterfall-adaptive").waterfall;
const waterfallSilde = require("vue-waterfall-adaptive").waterfallSilde;
```
也可以在 html 文件中使用 `script` 标签引入脚本，访问全局变量 `VueWaterfall`

```js
<script src="lib/vue-waterfall-adaptive.js"></script>
```

## 使用

```html
<waterfall>
  <waterfallSilde>item1</waterfallSilde>
  <waterfallSilde>item2</waterfallSilde>
  <waterfallSilde>item3</waterfallSilde>
  ...
</waterfall>
```

## 选项

### waterfall 属性

| 属性            | 描述                                                           | 默认值      | 类型       | 可选项                   |
| --------------- | ------------------------------------------------------------- | ----------- | --------- | ------------------------ |
| top             | 初始 `top` 值                                                  | 0           | Number    |           -              |
| top-interval    | 瀑布流布局上下间距                                              | 0           | Number    |           -              |
| left-interval   | 瀑布流布局左右间距                                              | 0           | Number    |            -             |
| width           | 宽度                                                           | 0           | Number    |              -           |
| loading         | 是否显示加载中的菊花图                                          | false       | Boolean   |           -              |
| loading-color   | 菊花图的颜色                                                   | #969799     | String   |           -              |
| offset          | 滚动条距离底部小于 `offset` 时触发 `load` 事件                   | 200         | Number    |           -              |
| finished        | 是否已加载完成，加载完成后不再触发 `load` 事件                    | false       | Boolean   |           -              |
| finished-txt    | 加载完成后的提示文案                                            | 没有更多了~  | String   |           -              |

### waterfall 事件

| 事件名   | 说明                                                       | 参数         |
| ------- | -----------------------------------------------------------| ----------- |
| load    | 滚动条与底部距离小于 `offset` 时触发                          |     150     |

### waterfallSilde 属性

| 属性     | 描述                                                                   |  默认值       | 类型      |
| -------  | -----------------------------------------------------------            | ----------- | --------- |
| prefetch | 是否需要预加载，在图片不定高时需要设置为 `true`，会预加载所有图片。 预加载时为了保证数据数据，会阻塞后续渲染   |     false     | Boolean|
| imgs     | 需要预加载的图片数组，数组每一项为图片 url   |     [ ]     | string[ ] |
## 许可

MIT@[geng452654716](https://github.com/geng452654716)
