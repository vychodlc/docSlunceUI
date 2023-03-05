# Layout 布局
简单的自适应页面布局

## 基础用法
Layout 基本使用，将每一行平均分为 24 列。
<div class='box' style="border: 1px solid #c0c0c2; border-radius: 5px; padding: 20px 10px">
  <sl-row>
    <sl-col :span="12"><div class="col-box-2 col-box">12</div></sl-col>
    <sl-col :span="12"><div class="col-box-1 col-box">12</div></sl-col>
  </sl-row>
  <sl-row>
    <sl-col :span="8"><div class="col-box-1 col-box">8</div></sl-col>
    <sl-col :span="8"><div class="col-box-2 col-box">8</div></sl-col>
    <sl-col :span="8"><div class="col-box-1 col-box">8</div></sl-col>
  </sl-row>
  <sl-row>
    <sl-col :span="6"><div class="col-box-2 col-box">6</div></sl-col>
    <sl-col :span="6"><div class="col-box-1 col-box">6</div></sl-col>
    <sl-col :span="6"><div class="col-box-2 col-box">6</div></sl-col>
    <sl-col :span="6"><div class="col-box-1 col-box">6</div></sl-col>
  </sl-row>
  <sl-row>
    <sl-col :span="4"><div class="col-box-1 col-box">4</div></sl-col>
    <sl-col :span="2"><div class="col-box-2 col-box">2</div></sl-col>
    <sl-col :span="4"><div class="col-box-1 col-box">4</div></sl-col>
    <sl-col :span="6"><div class="col-box-2 col-box">6</div></sl-col>
    <sl-col :span="8"><div class="col-box-1 col-box">8</div></sl-col>
  </sl-row>
</div>

<style>
  .col-box {
    height: 34px;
    margin-bottom: 10px;
    text-align: center;
    line-height: 34px;
  }
  .col-box-1 {
    background-color: #dbeafe;
    color: #333;
  }
  .col-box-2 {
    background-color: #445be2;
    color: #fff;
  }
</style>

::: details 显示代码
```html
<div>
  <sl-row>
    <sl-col :span="12"><div class="col-box-2 col-box">12</div></sl-col>
    <sl-col :span="12"><div class="col-box-1 col-box">12</div></sl-col>
  </sl-row>
  <sl-row>
    <sl-col :span="8"><div class="col-box-1 col-box">8</div></sl-col>
    <sl-col :span="8"><div class="col-box-2 col-box">8</div></sl-col>
    <sl-col :span="8"><div class="col-box-1 col-box">8</div></sl-col>
  </sl-row>
  <sl-row>
    <sl-col :span="6"><div class="col-box-2 col-box">6</div></sl-col>
    <sl-col :span="6"><div class="col-box-1 col-box">6</div></sl-col>
    <sl-col :span="6"><div class="col-box-2 col-box">6</div></sl-col>
    <sl-col :span="6"><div class="col-box-1 col-box">6</div></sl-col>
  </sl-row>
  <sl-row>
    <sl-col :span="4"><div class="col-box-1 col-box">4</div></sl-col>
    <sl-col :span="2"><div class="col-box-2 col-box">2</div></sl-col>
    <sl-col :span="4"><div class="col-box-1 col-box">4</div></sl-col>
    <sl-col :span="6"><div class="col-box-2 col-box">6</div></sl-col>
    <sl-col :span="8"><div class="col-box-1 col-box">8</div></sl-col>
  </sl-row>
</div>

<style>
  .col-box {
    height: 34px;
    margin-bottom: 10px;
    text-align: center;
    line-height: 34px;
  }
  .col-box-1 {
    background-color: #dbeafe;
    color: #333;
  }
  .col-box-2 {
    background-color: #445be2;
    color: #fff;
  }
</style>
```
:::

## 位置偏移
通过 offset 设置偏移占用指定的列数。
<div class='box' style="border: 1px solid #c0c0c2; border-radius: 5px; padding: 20px 10px">
  <sl-row>
    <sl-col :span="10"><div class="col-box-2 col-box">10</div></sl-col>
    <sl-col :span="12" :offset="2"><div class="col-box-1 col-box">12</div></sl-col>
  </sl-row>
  <sl-row>
    <sl-col :span="8"><div class="col-box-1 col-box">8</div></sl-col>
    <sl-col :span="8" :offset="8"><div class="col-box-1 col-box">8</div></sl-col>
  </sl-row>
  <sl-row>
    <sl-col :span="2"><div class="col-box-2 col-box">2</div></sl-col>
    <sl-col :span="6" :offset="4"><div class="col-box-1 col-box">6</div></sl-col>
    <sl-col :span="6" :offset="6"><div class="col-box-2 col-box">6</div></sl-col>
  </sl-row>
  <sl-row>
    <sl-col :span="4"><div class="col-box-1 col-box">4</div></sl-col>
    <sl-col :span="2" :offset="4"><div class="col-box-2 col-box">2</div></sl-col>
    <sl-col :span="4" :offset="2"><div class="col-box-1 col-box">4</div></sl-col>
    <sl-col :span="6" :offset="2"><div class="col-box-2 col-box">6</div></sl-col>
  </sl-row>
</div>

::: details 显示代码
```html
<div>
  <sl-row>
    <sl-col :span="10"><div class="col-box-2 col-box">10</div></sl-col>
    <sl-col :span="12" :offset="2"><div class="col-box-1 col-box">12</div></sl-col>
  </sl-row>
  <sl-row>
    <sl-col :span="8"><div class="col-box-1 col-box">8</div></sl-col>
    <sl-col :span="8" :offset="8"><div class="col-box-1 col-box">8</div></sl-col>
  </sl-row>
  <sl-row>
    <sl-col :span="2"><div class="col-box-2 col-box">2</div></sl-col>
    <sl-col :span="6" :offset="4"><div class="col-box-1 col-box">6</div></sl-col>
    <sl-col :span="6" :offset="6"><div class="col-box-2 col-box">6</div></sl-col>
  </sl-row>
  <sl-row>
    <sl-col :span="4"><div class="col-box-1 col-box">4</div></sl-col>
    <sl-col :span="2" :offset="4"><div class="col-box-2 col-box">2</div></sl-col>
    <sl-col :span="4" :offset="2"><div class="col-box-1 col-box">4</div></sl-col>
    <sl-col :span="6" :offset="2"><div class="col-box-2 col-box">6</div></sl-col>
  </sl-row>
</div>
<style>
  .col-box {
    height: 34px;
    margin-bottom: 10px;
    text-align: center;
    line-height: 34px;
  }
  .col-box-1 {
    background-color: #dbeafe;
    color: #333;
  }
  .col-box-2 {
    background-color: #445be2;
    color: #fff;
  }
</style>
```
:::

## Layout API

### 属性
| 参数 | 说明 | 类型 | 可选值	| 默认值|
| - | - | - | - | - |
| span | 每行占用列数 | number | - | 24 |
| offset | 每行占用列数 | number | - | - |