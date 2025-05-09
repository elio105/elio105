module.exports = {
    base: '/platform-manual/',
    dest: '../../public', 
    title: '项目级 DIM 操作手册',
    head: [
      // ['link', { rel: 'icon', href: './favicon.ico' }]ces 
    ],
    themeConfig: {
      nav: [
        {
          text: '',
          link: '/' // 这里的'/'表示首页路径，可根据实际情况调整
        },
        {
          text: '介绍',
          link: '/introduce/index.md' // 这里的'/'表示首页路径，可根据实际情况调整
        },
        { text: '登录系统', link: '/dlxt/dlxt.md' },
        // { text: '工作台', link: 'gzt/工作台.md' },
        // {
        //   title: '登录系统',
        //   collapsable: false,
        //   children: [
        //     ['/dikt/登录系统.md', '登录系统']
        //   ]
        // },
        {
          text: '基础工作',
          items: [
            { text: '监管账户', link: '/jcgz/jgzh.md' },
            { text: '工程合同', link: '/jcgz/gcht.md' },
            { text: '参建单位', link: '/jcgz/cjdw.md' }
          ]
        },
        {
          text: '财务管理',
          items: [
            { text: '资金申报', link: '/cwgl/zjsb.md' },
            { text: '支付申请', link: '/cwgl/zfsq.md' },
            { text: '基础信息', link: '/cwgl/jcxx.md' },
            { text: '数据分析', link: '/cwgl/sjfx.md' }
          ]
        },
        {
          text: '项目前期',
          items: [
            { text: '立项', link: '/xmqq/lx.md' },
            { text: '管理分配', link: '/xmqq/glfp.md' },
            { text: '初设', link: '/xmqq/cs.md' },
            { text: '招投标', link: '/xmqq/ztb.md' },
            { text: '项目名录', link: '/xmqq/xmml.md' },
            { text: '工程合同', link: '/xmqq/gcht.md' },
            { text: '图纸设计', link: '/xmqq/tzsj.md' }
          ]
        },
        {
          text: '项目管理',
          items: [
            { text: '数据分析', link: '/xmgl/sjfx.md' },
            { text: '合同管理', link: '/xmgl/htgl.md' },
            { text: '供应商管理', link: '/xmgl/gysgl.md' },
            { text: '发票管理', link: '/xmgl/fpgl.md' },
            { text: '物资管理', link: '/xmgl/wzgl.md' },
            { text: '劳务管理', link: '/xmgl/lwgl.md' },
            { text: '施工管理', link: '/xmgl/sggl.md' },
            { text: '进度管理', link: '/xmgl/jdgl.md' },
            { text: '巡查管理', link: '/xmgl/xcgl.md' },
            { text: '专项检查', link: '/xmgl/zxjc.md' }
          ]
        },
        {
          text: '运维管理',
          items: [
            { text: '报修单', link: '/ywgl/bxd.md' },
            { text: '维修单', link: '/ywgl/wxd.md' }
          ]
        },
        {
          text: '一码通',
          items: [
            { text: '反映问题', link: '/ymt/fywt.md' },
            { text: '处理问题', link: '/ymt/clwt.md' }
          ]
        }
      ],
      sidebar: {
        // 基础工作
        '/jcgz/': [
          {
            title: '基础工作',
            collapsable: false,
            children: [
              ['/jcgz/jgzh.md', '监管账户'],
              ['/jcgz/gcht.md', '工程合同'],
              ['/jcgz/cjdw.md', '参建单位']
            ]
          }
        ],
  
        // 财务管理
        '/cwgl/': [
          {
            title: '财务管理',
            collapsable: false,
            children: [
              ['/cwgl/zjsb.md', '资金申报'],
              ['/cwgl/zfsq.md', '支付申请'],
              ['/cwgl/jcxx.md', '基础信息'],
              ['/cwgl/sjfx.md', '数据分析']
            ]
          }
        ],
  
        // 项目前期
        '/xmqq/': [
          {
            title: '项目前期',
            collapsable: false,
            children: [
              ['/xmqq/lx.md', '立项'],
              ['/xmqq/glfp.md', '管理分配'],
              ['/xmqq/cs.md', '初设'],
              ['/xmqq/ztb.md', '招投标'],
              ['/xmqq/xmml.md', '项目名录'],
              ['/xmqq/gcht.md', '工程合同'],
              ['/xmqq/tzsj.md', '图纸设计']
            ]
          }
        ],
  
        // 项目管理
        '/xmgl/': [
          {
            title: '项目管理',
            collapsable: false,
            children: [
              ['/xmgl/sjfx.md', '数据分析'],
              ['/xmgl/htgl.md', '合同管理'],
              ['/xmgl/gysgl.md', '供应商管理'],
              ['/xmgl/fpgl.md', '发票管理'],
              ['/xmgl/wzgl.md', '物资管理'],
              ['/xmgl/lwgl.md', '劳务管理'],
              ['/xmgl/sggl.md', '施工管理'],
              ['/xmgl/jdgl.md', '进度管理'],
              ['/xmgl/xcgl.md', '巡查管理'],
              ['/xmgl/zxjc.md', '专项检查']
            ]
          }
        ],
  
        // 运维管理
        '/ywgl/': [
          {
            title: '运维管理',
            collapsable: false,
            children: [
              ['/ywgl/bxd.md', '报修单'],
              ['/ywgl/wxd.md', '维修单']
            ]
          }
        ],
  
        // 一码通
        '/ymt/': [
          {
            title: '一码通',
            collapsable: false,
            children: [
              ['/ymt/fywt.md', '反映问题'],
              ['/ymt/clwt.md', '处理问题']
            ]
          }
        ]
      }
    },
    plugins: [
      [
        '@vuepress/search',
        {
          searchMaxSuggestions: 10
        }
      ]
    ]
  }
