import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Craft Content Framework",
  description: "Craft Content Framework VitePress",
  lastUpdated:true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/tutorials/quick-start' },
      { text: '深度定制', link: '/guide/index' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/APILetter/craft-vitepress' }
    ],
    footer: {
      message: 'Craft Content Framework',
      copyright: '<a href="https://www.apiletter.com/">APILetter.com</a>'
    },
    editLink: {
      pattern: 'https://github.com/APILetter/craft-vitepress/edit/main/docs/:path'
    },
    sidebar:{
      '/guide/':[
        {
          text: '深度定制',
          items: [
            { text: '修改 配置', link: '/guide/' },
          ]
        }
      ],
      "/tutorials/":[
        {
          text: '从零开始',
          items: [
            { text: '修改 配置', link: '/guide/' },
          ]
        }
      ]
    }
  },
})
