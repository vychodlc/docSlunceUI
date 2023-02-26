# Button 按钮
常见的操作按钮
## 基础用法
基础的按钮用法
<div class='box' style="border: 1px solid #c0c0c2; border-radius: 5px; padding: 10px">
  <div>
    <sl-button>默认按钮</sl-button>
    <sl-button type="primary">主要按钮</sl-button>
    <sl-button type="success">成功按钮</sl-button>
    <sl-button type="info">信息按钮</sl-button>
    <sl-button type="warning">警告按钮</sl-button>
    <sl-button type="danger">危险按钮</sl-button>
  </div>
  <div style='margin-top:20px'>
    <sl-button round>默认按钮</sl-button>
    <sl-button round type="primary">主要按钮</sl-button>
    <sl-button round type="success">成功按钮</sl-button>
    <sl-button round type="info">信息按钮</sl-button>
    <sl-button round type="warning">警告按钮</sl-button>
    <sl-button round type="danger">危险按钮</sl-button>
  </div>
</div>

> 使用 `type` 和 `round` 属性来定义 `Button` 的样式。

::: details 显示代码
```html
<div>
  <sl-button>默认按钮</sl-button>
  <sl-button type="primary">主要按钮</sl-button>
  <sl-button type="success">成功按钮</sl-button>
  <sl-button type="info">信息按钮</sl-button>
  <sl-button type="warning">警告按钮</sl-button>
  <sl-button type="danger">危险按钮</sl-button>
</div>
<div style='margin-top:20px'>
  <sl-button round>默认按钮</sl-button>
  <sl-button round type="primary">主要按钮</sl-button>
  <sl-button round type="success">成功按钮</sl-button>
  <sl-button round type="info">信息按钮</sl-button>
  <sl-button round type="warning">警告按钮</sl-button>
  <sl-button round type="danger">危险按钮</sl-button>
</div>
```
:::

## 禁用状态
按钮不可用状态
<div class='box' style="border: 1px solid #c0c0c2; border-radius: 5px; padding: 10px">
  <div>
    <sl-button disabled>默认按钮</sl-button>
    <sl-button disabled type="primary">主要按钮</sl-button>
    <sl-button disabled type="success">成功按钮</sl-button>
    <sl-button disabled type="info">信息按钮</sl-button>
    <sl-button disabled type="warning">警告按钮</sl-button>
    <sl-button disabled type="danger">危险按钮</sl-button>
  </div>
</div>

> 你可以使用 `disabled` 属性来定义按钮是否可用，它接受一个 `Boolean` 值。

::: details 显示代码
```html
<div>
  <sl-button disabled>默认按钮</sl-button>
  <sl-button disabled type="primary">主要按钮</sl-button>
  <sl-button disabled type="success">成功按钮</sl-button>
  <sl-button disabled type="info">信息按钮</sl-button>
  <sl-button disabled type="warning">警告按钮</sl-button>
  <sl-button disabled type="danger">危险按钮</sl-button>
</div>
```
:::

## 不同尺寸
`Button` 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸
<div class='box' style="border: 1px solid #c0c0c2; border-radius: 5px; padding: 10px">
  <div>
    <sl-button>默认按钮</sl-button>
    <sl-button size="medium">中等按钮</sl-button>
    <sl-button size="small">小型按钮</sl-button>
    <sl-button size="mini">超小按钮</sl-button>
  </div>
  <div style="margin-top: 20px">
    <sl-button round>默认按钮</sl-button>
    <sl-button size="medium" round>中等按钮</sl-button>
    <sl-button size="small" round>小型按钮</sl-button>
    <sl-button size="mini" round>超小按钮</sl-button>
  </div>
</div>

> 额外的尺寸：`medium`、`small`、`mini`，通过设置 `size` 属性来配置它们。

::: details 显示代码
```html
<div>
  <sl-button>默认按钮</sl-button>
  <sl-button size="medium">中等按钮</sl-button>
  <sl-button size="small">小型按钮</sl-button>
  <sl-button size="mini">超小按钮</sl-button>
</div>
<div style="margin-top: 20px">
  <sl-button round>默认按钮</sl-button>
  <sl-button size="medium" round>中等按钮</sl-button>
  <sl-button size="small" round>小型按钮</sl-button>
  <sl-button size="mini" round>超小按钮</sl-button>
</div>
```
:::

## Attributes

| 参数 | 说明 | 类型 | 可选值	| 默认值|
| - | - | - | - | - |
| size | 尺寸 | string | medium / small / mini | - |
| type | 类型 | string | primary / success / warning / danger / info | - |
| round | 是否圆形按钮 | boolean | - | false |
| disabled | 是否禁用状态 | boolean | - | false |