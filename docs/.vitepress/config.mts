import { defineConfig } from 'vitepress'

export default defineConfig({
     base: "/Simplenote",
     title: "Simplenote",
     description: "Record the world",
     themeConfig: {
          sidebar: [
               {
                    text: 'Examples',
                    items: [
                         { text: 'Markdown Examples', link: '/markdown-examples' },
                         { text: 'Runtime API Examples', link: '/api-examples' }
                    ]
               }
          ],
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
     }
})
