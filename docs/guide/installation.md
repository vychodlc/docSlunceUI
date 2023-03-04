# SlunceUI 安装指南
 
## 安装插件
 
```
npm install slunce-ui
或：yarn add slunce-ui
或：cnpm install slunce-ui
```
 
## 使用 slunce-ui
 
```TypeScript
// 全部引入
import SlunceUI from 'slunce-ui'
import 'slunce-ui/dist/style.css'
 
app.use(SlunceUI)
```

## 愉快开始
```HTML
<sl-button>This is a button.</sl-button>
```

## 按需引用
```TypeScript
import { slButton, slInput } from "slunce-ui";
```
```html
<sl-button type='primary'>点击</sl-button>
<sl-input v-model="value" placeholder="基本使用"></sl-input>
```