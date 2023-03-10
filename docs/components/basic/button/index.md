# Button 按钮
常见的操作按钮
## 基础用法
基础的按钮用法
<div class='box' style="border: 1px solid #c0c0c2; border-radius: 5px; padding: 20px 10px">
  <div>
    <sl-button style='margin-top:10px'>默认按钮</sl-button>
    <sl-button style='margin-top:10px' type="primary">主要按钮</sl-button>
    <sl-button style='margin-top:10px' type="success">成功按钮</sl-button>
    <sl-button style='margin-top:10px' type="info">信息按钮</sl-button>
    <sl-button style='margin-top:10px' type="warning">警告按钮</sl-button>
    <sl-button style='margin-top:10px' type="danger">危险按钮</sl-button>
  </div>
  <div>
    <sl-button style='margin-top:10px' plain>默认按钮</sl-button>
    <sl-button style='margin-top:10px' plain type="primary">主要按钮</sl-button>
    <sl-button style='margin-top:10px' plain type="success">成功按钮</sl-button>
    <sl-button style='margin-top:10px' plain type="info">信息按钮</sl-button>
    <sl-button style='margin-top:10px' plain type="warning">警告按钮</sl-button>
    <sl-button style='margin-top:10px' plain type="danger">危险按钮</sl-button>
  </div>
  <div>
    <sl-button style='margin-top:10px' round>默认按钮</sl-button>
    <sl-button style='margin-top:10px' round type="primary">主要按钮</sl-button>
    <sl-button style='margin-top:10px' round type="success">成功按钮</sl-button>
    <sl-button style='margin-top:10px' round type="info">信息按钮</sl-button>
    <sl-button style='margin-top:10px' round type="warning">警告按钮</sl-button>
    <sl-button style='margin-top:10px' round type="danger">危险按钮</sl-button>
  </div>
</div>

> 使用 `type`、`plain` 和 `round` 属性来定义 `Button` 的样式。

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
  <sl-button plain>默认按钮</sl-button>
  <sl-button plain type="primary">主要按钮</sl-button>
  <sl-button plain type="success">成功按钮</sl-button>
  <sl-button plain type="info">信息按钮</sl-button>
  <sl-button plain type="warning">警告按钮</sl-button>
  <sl-button plain type="danger">危险按钮</sl-button>
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
<div class='box' style="border: 1px solid #c0c0c2; border-radius: 5px; padding: 20px 10px">
  <div>
    <sl-button style='margin-top:10px' disabled>默认按钮</sl-button>
    <sl-button style='margin-top:10px' disabled type="primary">主要按钮</sl-button>
    <sl-button style='margin-top:10px' disabled type="success">成功按钮</sl-button>
    <sl-button style='margin-top:10px' disabled type="info">信息按钮</sl-button>
    <sl-button style='margin-top:10px' disabled type="warning">警告按钮</sl-button>
    <sl-button style='margin-top:10px' disabled type="danger">危险按钮</sl-button>
  </div>
  <div>
    <sl-button style='margin-top:10px' plain disabled>默认按钮</sl-button>
    <sl-button style='margin-top:10px' type="primary" plain disabled>主要按钮</sl-button>
    <sl-button style='margin-top:10px' type="success" plain disabled>成功按钮</sl-button>
    <sl-button style='margin-top:10px' type="info" plain disabled>信息按钮</sl-button>
    <sl-button style='margin-top:10px' type="warning" plain disabled>警告按钮</sl-button>
    <sl-button style='margin-top:10px' type="danger" plain disabled>危险按钮</sl-button>
  </div>
</div>

> 你可以使用 `disabled` 属性来定义按钮是否可用，它接受一个 `Boolean` 值。

::: details 显示代码
```html
<div>
  <div>
    <sl-button disabled>默认按钮</sl-button>
    <sl-button disabled type="primary">主要按钮</sl-button>
    <sl-button disabled type="success">成功按钮</sl-button>
    <sl-button disabled type="info">信息按钮</sl-button>
    <sl-button disabled type="warning">警告按钮</sl-button>
    <sl-button disabled type="danger">危险按钮</sl-button>
  </div>
  <div style='margin-top:20px'>
    <sl-button plain disabled>默认按钮</sl-button>
    <sl-button type="primary" plain disabled>主要按钮</sl-button>
    <sl-button type="success" plain disabled>成功按钮</sl-button>
    <sl-button type="info" plain disabled>信息按钮</sl-button>
    <sl-button type="warning" plain disabled>警告按钮</sl-button>
    <sl-button type="danger" plain disabled>危险按钮</sl-button>
  </div>
</div>

```
:::

## 文字按钮
没有边框和背景色的按钮
<div class='box' style="border: 1px solid #c0c0c2; border-radius: 5px; padding: 20px 10px">
  <div>
    <sl-button style='margin-top:10px' text>默认按钮</sl-button>
    <sl-button style='margin-top:10px' text type="primary">主要按钮</sl-button>
    <sl-button style='margin-top:10px' text type="success">成功按钮</sl-button>
    <sl-button style='margin-top:10px' text type="info">信息按钮</sl-button>
    <sl-button style='margin-top:10px' text type="warning">警告按钮</sl-button>
    <sl-button style='margin-top:10px' text type="danger">危险按钮</sl-button>
  </div>
  <div>
    <sl-button style='margin-top:10px' bg text>默认按钮</sl-button>
    <sl-button style='margin-top:10px' type="primary" bg text>主要按钮</sl-button>
    <sl-button style='margin-top:10px' type="success" bg text>成功按钮</sl-button>
    <sl-button style='margin-top:10px' type="info" bg text>信息按钮</sl-button>
    <sl-button style='margin-top:10px' type="warning" bg text>警告按钮</sl-button>
    <sl-button style='margin-top:10px' type="danger" bg text>危险按钮</sl-button>
  </div>
</div>

> 你可以使用 `bg` 属性来定义按钮的背景是否常亮，它接受一个 `Boolean` 值。

::: details 显示代码
```html
<div>
  <div>
    <sl-button disabled>默认按钮</sl-button>
    <sl-button disabled type="primary">主要按钮</sl-button>
    <sl-button disabled type="success">成功按钮</sl-button>
    <sl-button disabled type="info">信息按钮</sl-button>
    <sl-button disabled type="warning">警告按钮</sl-button>
    <sl-button disabled type="danger">危险按钮</sl-button>
  </div>
  <div style='margin-top:20px'>
    <sl-button plain disabled>默认按钮</sl-button>
    <sl-button type="primary" plain disabled>主要按钮</sl-button>
    <sl-button type="success" plain disabled>成功按钮</sl-button>
    <sl-button type="info" plain disabled>信息按钮</sl-button>
    <sl-button type="warning" plain disabled>警告按钮</sl-button>
    <sl-button type="danger" plain disabled>危险按钮</sl-button>
  </div>
</div>
```
:::

## 不同尺寸
`Button` 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸
<div class='box' style="border: 1px solid #c0c0c2; border-radius: 5px; padding: 20px 10px">
  <div>
    <sl-button style='margin-top:10px'>默认按钮</sl-button>
    <sl-button style='margin-top:10px' size="medium">中等按钮</sl-button>
    <sl-button style='margin-top:10px' size="small">小型按钮</sl-button>
    <sl-button style='margin-top:10px' size="mini">超小按钮</sl-button>
  </div>
  <div>
    <sl-button style='margin-top:10px' round>默认按钮</sl-button>
    <sl-button style='margin-top:10px' size="medium" round>中等按钮</sl-button>
    <sl-button style='margin-top:10px' size="small" round>小型按钮</sl-button>
    <sl-button style='margin-top:10px' size="mini" round>超小按钮</sl-button>
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

## 自定义颜色
您可以自定义按钮颜色。

<div class='box' style="border: 1px solid #c0c0c2; border-radius: 5px; padding: 20px 10px">
  <sl-button style='margin-top:10px' type="custom" color="#626aef">Default</sl-button>
  <sl-button style='margin-top:10px' type="custom" color="#626aef" plain>Plain</sl-button>
  <sl-button style='margin-top:10px' type="custom" color="#626aef" disabled>Disabled</sl-button>
  <sl-button style='margin-top:10px' type="custom" color="#626aef" plain disabled>Plain Disabled</sl-button>
</div>

> 我们将自动计算 `hover` 和 `active` 颜色。

::: details 显示代码
```html
<div>
  <sl-button type="custom" color="#626aef">Default</sl-button>
  <sl-button type="custom" color="#626aef" plain>Plain</sl-button>
  <sl-button type="custom" color="#626aef" disabled>Disabled</sl-button>
  <sl-button type="custom" color="#626aef" plain disabled>Plain Disabled</sl-button>
</div>
```
:::

## Button API

### 属性
| 参数 | 说明 | 类型 | 可选值	| 默认值|
| - | - | - | - | - |
| size | 尺寸 | string | medium / small / mini | - |
| type | 类型 | string | primary / success / warning / danger / info | - |
| plain |	是否为朴素按钮 | boolean | false |
| round | 是否圆形按钮 | boolean | - | false |
| disabled | 是否禁用状态 | boolean | - | false |
| text | 是否文字按钮 | boolean | - | false |
| bg | 是否显示文字按钮背景颜色 | boolean | - | false |
| color | 自定义按钮颜色, 并自动计算 `hover` 和 `active` 触发后的颜色 | string | - | - |