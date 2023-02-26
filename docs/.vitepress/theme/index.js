import DefaultTheme from 'vitepress/theme'
import './style/var.css'
import 'slunce-ui/dist/style.css'
import SlunceUI from 'slunce-ui'

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData, isServer }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    app.use(SlunceUI)
  },
};