import{_ as s,c as a,o as n,e as l}from"./app.4b789be7.js";const C=JSON.parse('{"title":"SlunceUI 安装指南","description":"","frontmatter":{},"headers":[{"level":2,"title":"安装插件","slug":"安装插件","link":"#安装插件","children":[]},{"level":2,"title":"引入并注册插件","slug":"引入并注册插件","link":"#引入并注册插件","children":[]},{"level":2,"title":"在项目中使用(示例)","slug":"在项目中使用-示例","link":"#在项目中使用-示例","children":[]}],"relativePath":"guide/installation.md"}'),e={name:"guide/installation.md"},t=l(`<h1 id="slunceui-安装指南" tabindex="-1">SlunceUI 安装指南 <a class="header-anchor" href="#slunceui-安装指南" aria-hidden="true">#</a></h1><h2 id="安装插件" tabindex="-1">安装插件 <a class="header-anchor" href="#安装插件" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">npm install slunceui</span></span>
<span class="line"><span style="color:#A6ACCD;">或：yarn add slunceui</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="引入并注册插件" tabindex="-1">引入并注册插件 <a class="header-anchor" href="#引入并注册插件" aria-hidden="true">#</a></h2><div class="language-TypeScript"><button title="Copy Code" class="copy"></button><span class="lang">TypeScript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 全部引入</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> SlunceUI </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">slunceui</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">slunceui/dist/style.css</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(SlunceUI)</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 按需引入</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> asButton </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">SlunceUI</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">SlunceUI/dist/style.css</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(asButton)</span></span>
<span class="line"></span></code></pre></div><h2 id="在项目中使用-示例" tabindex="-1">在项目中使用(示例) <a class="header-anchor" href="#在项目中使用-示例" aria-hidden="true">#</a></h2><div class="language-HTML"><button title="Copy Code" class="copy"></button><span class="lang">HTML</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">asButton</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">This is a button.</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">asButton</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,7),p=[t];function o(c,i,r,y,D,d){return n(),a("div",null,p)}const F=s(e,[["render",o]]);export{C as __pageData,F as default};