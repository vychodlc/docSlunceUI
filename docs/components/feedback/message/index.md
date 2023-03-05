# Message 消息提示
常用于主动操作后的反馈提示。 
## 基础用法
从顶部出现，3 秒后自动消失。

<div class='box' style="border: 1px solid #c0c0c2; border-radius: 5px; padding: 20px 10px">
  <sl-button @click="openMsg()">Show Message</sl-button>
  <sl-button plain @click="openVn">VNode</sl-button>
</div>

<script lang="ts" setup>
import {slMessage} from "slunce-ui"
import { h } from 'vue'
const openMsg = (text='info') => {
  slMessage({
    text: text,
    type: text
  })
}
const openVn = () => {
  slMessage({
    text: h('p', null, '默认消息提示(VNode)')
  })
}
const openMsgTimeout = (timeout=2000) => {
  slMessage({
    text: '消息提示',
    timeout: timeout
  })
}
const openMsgClose = (text='info') => {
  slMessage({
    text: `${text}-可关闭的消息`,
    type: text,
    close: true
  })
}
</script>

> 使用 `text` 属性来定义 `Message` 的文字内容

::: details 显示代码
```html
<div>
  <sl-button plain @click="openMsg">Show Message</sl-button>
  <sl-button plain @click="openVn">VNode</sl-button>
</div>

<script lang="ts" setup>
import {slMessage} from "slunce-ui"
import { h } from 'vue'
const openMsg = (text='info') => {
  slMessage({
    text: text,
    type: text
  })
}
const openVn = () => {
  slMessage({
    text: h('p', null, '默认消息提示(VNode)')
  })
}
</script>
```
:::

## 不同状态
用来显示「成功、警告、消息、错误」类的操作反馈

<div class='box' style="border: 1px solid #c0c0c2; border-radius: 5px; padding: 20px 10px">
  <sl-button plain @click="openMsg('success')">Success</sl-button>
  <sl-button plain @click="openMsg('info')">Info</sl-button>
  <sl-button plain @click="openMsg('warning')">Warning</sl-button>
  <sl-button plain @click="openMsg('danger')">Danger</sl-button>
</div>

> 使用 `type` 属性来定义 `Message` 的样式。

::: details 显示代码
```html
<div>
  <sl-button plain @click="openMsg('success')">Success</sl-button>
  <sl-button plain @click="openMsg('info')">Info</sl-button>
  <sl-button plain @click="openMsg('warning')">Warning</sl-button>
  <sl-button plain @click="openMsg('danger')">Danger</sl-button>
</div>

<script lang="ts" setup>
import {slMessage} from "slunce-ui"
import { h } from 'vue'
const openMsg = (text='info') => {
  slMessage({
    text: text,
    type: text
  })
}
</script>
```
:::


## 不同停留时长
用来调节 `Message` 在页面的停留时长

<div class='box' style="border: 1px solid #c0c0c2; border-radius: 5px; padding: 20px 10px">
  <sl-button plain @click="openMsgTimeout()">Default</sl-button>
  <sl-button plain @click="openMsgTimeout(100)">0.1s 停留</sl-button>
  <sl-button plain @click="openMsgTimeout(3000)">3s 停留</sl-button>
</div>

> 使用 `timeout` 属性来定义 `Message` 在页面上的停留时长。

::: details 显示代码
```html
<div>
  <sl-button plain @click="openMsgTimeout()">Default</sl-button>
  <sl-button plain @click="openMsgTimeout(100)">0.1s 停留</sl-button>
  <sl-button plain @click="openMsgTimeout(3000)">3s 停留</sl-button>
</div>

<script lang="ts" setup>
import {slMessage} from "slunce-ui"
import { h } from 'vue'
const openMsgTimeout = (timeout=2000) => {
  slMessage({
    text: ('消息提示'),
    timeout: timeout
  })
}
</script>
```
:::

## 可关闭的消息提示
可以添加关闭按钮。
<div class='box' style="border: 1px solid #c0c0c2; border-radius: 5px; padding: 20px 10px">
  <sl-button plain @click="openMsgClose('success')">Success</sl-button>
  <sl-button plain @click="openMsgClose('info')">Info</sl-button>
  <sl-button plain @click="openMsgClose('warning')">Warning</sl-button>
  <sl-button plain @click="openMsgClose('danger')">Danger</sl-button>
</div>

> 使用 `close` 属性来定义 `Message` 是否显示关闭按钮。

::: details 显示代码
```html
<div>
  <sl-button plain @click="openMsgClose('success')">Success</sl-button>
  <sl-button plain @click="openMsgClose('info')">Info</sl-button>
  <sl-button plain @click="openMsgClose('warning')">Warning</sl-button>
  <sl-button plain @click="openMsgClose('danger')">Danger</sl-button>
</div>

<script lang="ts" setup>
import {slMessage} from "slunce-ui"
import { h } from 'vue'
const openMsgClose = () => {
  slMessage({
    text: '可关闭的消息',
    close: true
  })
}
</script>
```
:::

## Message API

### 属性
| 参数 | 说明 | 类型 | 可选值	| 默认值|
| - | - | - | - | - |
| text | 消息提示文本内容 | string\|VNode | - | - |
| type | 消息提示类型 | string | success / warning / danger / info | info |
| timeout | 消息提示框消失时间（单位：毫秒ms） | number | - | 2500 |
| close | 可关闭弹窗 | boolean | - | false |