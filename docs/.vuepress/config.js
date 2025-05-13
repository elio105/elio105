module.exports = {
  base: '/elio105/',  // 部署路径
  dest: './docs/.vuepress/dist',  // 构建输出目录
  title: '数字管理平台',
  description: '项目级 DIM 操作手册',
  themeConfig: {
    navbar: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '介绍',
        link: '/introduce/'
      },
      {
        text: '登录系统',
        link: '/dlxt/'
      },
      {
        text: '工作台',
        link: '/gzt/'
      },
      {
        text: '项目管理',
        link: '/xmgl/'
      },
      {
        text: '财务管理',
        link: '/cwgl/'
      },
    ],
    sidebar: [
      {
        title: '项目管理',
        children: ['/xmgl/sjfx.md', '/xmgl/htgl.md'],
      },
      {
        title: '财务管理',
        children: ['/cwgl/zjsb.md', '/cwgl/zfsq.md'],
      }
    ]
  }
}
