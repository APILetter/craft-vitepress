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
  lastUpdated:true,
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/tutorials/quick-start' },
      { text: '深度定制', link: '/guide/index' },
      {text:'API 文档',link:'/references/get-get'}
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
      '/references/':sidebar.generateSidebarGroups(),
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
