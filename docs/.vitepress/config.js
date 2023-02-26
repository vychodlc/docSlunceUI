import { defineConfig } from 'vitepress';

export default defineConfig({
  themeConfig: {
    siteTitle: "SlunceUI",
    logo: '/logo.png',
    nav: [
      { text: "指南", link: "/guide/installation" },
      { text: "组件", link: "/components/button/" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/vychodlc/SlunceUI" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "基础",
          items: [
            {
              text: "安装",
              link: "/guide/installation",
            },
            {
              text: "快速开始",
              link: "/guide/quickstart",
            },
          ],
        },
        {
          text: "进阶",
          items: [
            {
              text: "xx",
              link: "/xx",
            },
          ],
        },
      ],
      "/components/": [
        {
          text: "基础组件",
          items: [
            {
              text: "Button 按钮",
              link: "/components/button/",
            },
            {
              text: "Icon 图标",
              link: "/components/icon/",
            },
            {
              text: "Link 链接",
              link: "/components/link/",
            },
            {
              text: "Layout 布局",
              link: "/components/layout/",
            }
          ],
        }
      ]
    },
  },
})