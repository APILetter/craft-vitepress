import { defineConfig } from 'vitepress'
import { useSidebar } from 'vitepress-openapi'
import spec from '../spec.json'

const sidebar = useSidebar({
  spec,
  linkPrefix: '/references/',
})

console.log(JSON.stringify(sidebar.generateSidebarGroups()))


// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-Hans',
  title: "Craft Content Framework",
  description: "Craft Content Framework VitePress",
  lastUpdated: true,
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/tutorials/quick-start' },
      { text: '深度定制', link: '/guide/index' },
      { text: 'API 文档', link: '/references/get-get' }
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
    sidebar: {
      '/references/': sidebar.generateSidebarGroups(),
      '/guide/': [
        {
          text: '深度定制',
          items: [
            { text: '如何修改站点标题', link: '/guide/a' },
            { text: '如何修改站点配色', link: '/guide/b' },
            { text: '如何开启/关闭最后更新时间', link: '/guide/c' },
            { text: '如何修改 Footer', link: '/guide/d' },
            { text: '如何修改顶部菜单', link: '/guide/e' },
            { text: '如何修改首页', link: '/guide/f' },
          ]
        },
        {
          text: 'Compare With',
          items: [
            { text: 'Compare With Docsify', link: '/compare-with/a' },
            { text: 'Compare With Nextra', link: '/compare-with/b' }
          ]
        }
      ],
      '/compare-with/': [
        {
          text: '深度定制',
          items: [
            { text: '如何修改站点标题', link: '/guide/a' },
            { text: '如何修改站点配色', link: '/guide/b' },
            { text: '如何开启/关闭最后更新时间', link: '/guide/c' },
            { text: '如何修改 Footer', link: '/guide/d' },
            { text: '如何修改顶部菜单', link: '/guide/e' },
            { text: '如何修改首页', link: '/guide/f' },
          ]
        },
        {
          text: 'Compare With',
          items: [
            { text: 'Compare With Docsify', link: '/compare-with/a' },
            { text: 'Compare With Nextra', link: '/compare-with/b' }
          ]
        }
      ],
      "/tutorials/": [
        
        {
          text: 'Craft Content Framework',
          items: [
            { text: '产品优势', link: '/guide/' },
            { text: '产品功能', link: '/guide/' },
          ]
        },
        {
          text: '快速入门',
          items: [
            { text: '10 分钟部署一个 Craft Content Framework 站点', link: '/guide/' },
          ]
        },
        {
          text: '部署',
          items: [
            { text: '部署至 Vercel', link: '/guide/' },
            { text: '部署至 Heroku', link: '/guide/' },
            { text: '部署至 Netlify', link: '/guide/' },
          ]
        },
        {
          text: 'Legal',
          items: [
            { text: '用户协议', link: '/guide/' },
          ]
        }
      ]
    }
  },
})
