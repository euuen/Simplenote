import { defineConfig } from 'vitepress'

export default defineConfig({
     base: "/Simplenote/",
     title: "Simplenote",
     description: "Record the world",
     head: [['link', { rel: 'icon', href: '/Simplenote/favicon.ico' }]],
     themeConfig: {
          logo: "/favicon.ico",
          nav: [
               { text: "计算机", link: "/computer"}
          ],
          sidebar: {
               "/GLFW": [
                    { 
                         text: "初来乍到", 
                         collapsed: false,
                         items: [
                              { text: "简介", link: "/GLFW/tutorial/intro"}
                         ]
                    },
                    {
                         text: "按名称分类",
                         collapsed: true,
                         link: "/GLFW/dict/basic",
                         items: [
                              
                         ]
                    },
                    {
                         text: "按功能分类",
                         collapsed: true,
                         items: [
                              { text: "基本窗口管理", link: "/GLFW/cookbook/basicWindow"}
                         ]
                    }
               ],
               "/GLEW": [
                    {
                         text: "初来乍到",
                         link: "/GLEW/tutorial/intro"
                    },
                    {
                         text: "按功能分类",
                         collapsed: true,
                         items: [
                              { text: "渲染基本内容", link: "/GLEW/cookbook/content" },
                              { text: "缓冲区管理", link: "/GLEW/cookbook/buffer"}
                         ]
                    }
               ]
          },
          search: {
               provider: "local"
          },
          socialLinks: [
               { icon: 'github', link: 'https://github.com/euuen/Simplenote' }
          ],
          docFooter: {
			prev: '上一篇文章',
			next: '下一篇文章',
		},
          returnToTopLabel: '返回顶部',
          sidebarMenuLabel: '目录',
          outlineTitle: '页内导航',
          lastUpdatedText: '最后更新于',
          lastUpdated: true,
          outline : [1, 6],
          footer: {
               message: 'developed by euuen',
               copyright: 'Copyright © 2025 euuen',
          },
     },
     markdown: {
          lineNumbers: true
     }
})
