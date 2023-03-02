# Message 消息提示
常用于主动操作后的反馈提示。 
## 基础用法
从顶部出现，3 秒后自动消失。
<sl-button @click="openMsg1">Info</sl-button>
<sl-button type="success" @click="openMsg2">Success</sl-button>
<sl-button type="warning" @click="openMsg3">Warning</sl-button>
<sl-button type="danger" @click="openMsg4">Danger</sl-button>
<sl-button type="info" @click="openMsg5">Info</sl-button>

<script lang="ts" setup>
import slM from 'slunce-ui'
const openMsg1 = () => {
  Message({
    text: '默认消息提示'
  })
}
const openMsg2 = () => {
  Message({
    text: 'success',
    type: 'success'
  })
}
const openMsg3 = () => {
  Message({
    text: 'warning',
    type: 'warning'
  })
}
const openMsg4 = () => {
  Message({
    text: 'danger',
    type: 'danger'
  })
}
const openMsg5 = () => {
  Message({
    text: 'info',
    type: 'info'
  })
}
</script>

> 使用 `name` 属性来定义 `Icon` 的样式。

::: details 显示代码
```html
<div>
  <sl-button @click="openMsg1">Info</sl-button>
  <sl-button type="success" @click="openMsg2">Success</sl-button>
  <sl-button type="warning" @click="openMsg3">Warning</sl-button>
  <sl-button type="danger" @click="openMsg4">Danger</sl-button>
  <sl-button type="info" @click="openMsg5">Info</sl-button>
</div>

<script lang="ts" setup>
import Message from 'slunce-ui'
const openMsg1 = () => {
  Message({
    text: '默认消息提示'
  })
}
const openMsg2 = () => {
  Message({
    text: 'success',
    type: 'success'
  })
}
const openMsg3 = () => {
  Message({
    text: 'warning',
    type: 'warning'
  })
}
const openMsg4 = () => {
  Message({
    text: 'danger',
    type: 'danger'
  })
}
const openMsg5 = () => {
  Message({
    text: 'info',
    type: 'info'
  })
}
</script>
```
:::