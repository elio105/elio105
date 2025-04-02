// import { defaultTheme } from '@vuepress/theme-default'
// import { defineUserConfig } from 'vuepress/cli'
// import { viteBundler } from '@vuepress/bundler-vite'

// export default defineUserConfig({
//   lang: 'en-US',

//   title: '数管平台',
//   description: '建筑工程项目全生命周期数字化管理系统',

//   theme: defaultTheme({
  
//     logo: 'https://www.fxzdsg.com/api/public/image/logo/RElSRV9kNDAxYzIzYjUzZTM0YjE3YjdmYmRkYjBlNjg1YjM0M0RJUkVfNTA0YTQwMzVjYWExNDYxNjgzY2VlOTNlZjk4MDNmZmRsb2dvMi5wbmc=',
//     navbar: ['/', '/get-started'],
//   }),

//   bundler: viteBundler(),
// })
import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
    lang: 'zh-CN',
    title: '项目级DIM操作手册',
    description: '版本号：V1.03，2025年3月27日',
    bundler: viteBundler(),
    theme: defaultTheme({
        navbar: [
            { text: '首页', link: '/' },
            { text: '登录系统', link: '/login/' },
            { text: '工作台', link: '/workbench/' },
            { text: '基础工作', link: '/basic-work/' },
            { text: '项目管理', link: '/project-management/' },
            { text: '人员管理', link: '/personnel-management/' },
            { text: '设备管理', link: '/equipment-management/' },
            { text: '附件', link: '/appendix/' }
        ],
        sidebar: {
            '/login/': [
                { text: '登录系统', link: '/login/' }
            ],
            '/workbench/': [
                { text: '工作台', link: '/workbench/' }
            ],
            '/basic-work/': [
                { text: '基础工作', link: '/basic-work/' }
            ],
            '/project-management/': [
                { text: '项目管理', link: '/project-management/' }
            ],
            '/personnel-management/': [
                { text: '人员管理', link: '/personnel-management/' }
            ],
            '/equipment-management/': [
                { text: '设备管理', link: '/equipment-management/' }
            ],
            '/appendix/': [
                { text: '附件', link: '/appendix/' }
            ]
        }
    })
})