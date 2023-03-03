# Link 链接
文字超链接

## 基础用法
基础的文字超链接用法
<div class='box' style="border: 1px solid #c0c0c2; border-radius: 5px; padding: 20px 10px">
  <div>
    <sl-link style='margin-right: 10px;' href="https://element-plus.org">default</sl-link>
    <sl-link style='margin-right: 10px;' type="primary">primary</sl-link>
    <sl-link style='margin-right: 10px;' type="success">success</sl-link>
    <sl-link style='margin-right: 10px;' type="warning">warning</sl-link>
    <sl-link style='margin-right: 10px;' type="danger">danger</sl-link>
    <sl-link style='margin-right: 10px;' type="info">info</sl-link>
  </div>
</div>

::: details 显示代码
```html
<sl-link href="https://element-plus.org">default</sl-link>
<sl-link type="primary">primary</sl-link>
<sl-link type="success">success</sl-link>
<sl-link type="warning">warning</sl-link>
<sl-link type="danger">danger</sl-link>
<sl-link type="info">info</sl-link>
```
:::

## 禁用状态
文字链接不可用状态
<div class='box' style="border: 1px solid #c0c0c2; border-radius: 5px; padding: 20px 10px">
  <div>
    <sl-link style='margin-right: 10px;' disabled href="https://element-plus.org">default</sl-link>
    <sl-link style='margin-right: 10px;' disabled type="primary">primary</sl-link>
    <sl-link style='margin-right: 10px;' disabled type="success">success</sl-link>
    <sl-link style='margin-right: 10px;' disabled type="warning">warning</sl-link>
    <sl-link style='margin-right: 10px;' disabled type="danger">danger</sl-link>
    <sl-link style='margin-right: 10px;' disabled type="info">info</sl-link>
  </div>
</div>

::: details 显示代码
```html
<sl-link disabled href="https://element-plus.org">default</sl-link>
<sl-link disabled type="primary">primary</sl-link>
<sl-link disabled type="success">success</sl-link>
<sl-link disabled type="warning">warning</sl-link>
<sl-link disabled type="danger">danger</sl-link>
<sl-link disabled type="info">info</sl-link>
```
:::

## 下划线
文字链接下划线
<div class='box' style="border: 1px solid #c0c0c2; border-radius: 5px; padding: 20px 10px">
  <div>
    <sl-link style='margin-right:10px' :underline="false">Without Underline</sl-link>
    <sl-link style='margin-right:10px' >With Underline</sl-link>
  </div>
</div>

::: details 显示代码
```html
<div>
  <sl-link :underline="false">Without Underline</sl-link>
  <sl-link >With Underline</sl-link>
</div>
```
:::

## Link API

### 属性
| 参数 | 说明 | 类型 | 可选值	| 默认值|
| - | - | - | - | - |
| type | 类型 | string | primary / success / warning / danger / info | info |
| undeline | 是否下划线 | boolean | - | true |
| disabled | 是否禁用状态 | boolean | - | false |
| href | 原生 href 属性 | string | - | - |