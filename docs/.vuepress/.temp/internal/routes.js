export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"D:/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"项目级DIM操作手册"} }],
  ["/appendix/", { loader: () => import(/* webpackChunkName: "appendix_index.html" */"D:/vuepress-starter/docs/.vuepress/.temp/pages/appendix/index.html.js"), meta: {"title":"附件"} }],
  ["/equipment-management/", { loader: () => import(/* webpackChunkName: "equipment-management_index.html" */"D:/vuepress-starter/docs/.vuepress/.temp/pages/equipment-management/index.html.js"), meta: {"title":"设备管理"} }],
  ["/basic-work/", { loader: () => import(/* webpackChunkName: "basic-work_index.html" */"D:/vuepress-starter/docs/.vuepress/.temp/pages/basic-work/index.html.js"), meta: {"title":"基础工作"} }],
  ["/personnel-management/", { loader: () => import(/* webpackChunkName: "personnel-management_index.html" */"D:/vuepress-starter/docs/.vuepress/.temp/pages/personnel-management/index.html.js"), meta: {"title":"人员管理"} }],
  ["/login/", { loader: () => import(/* webpackChunkName: "login_index.html" */"D:/vuepress-starter/docs/.vuepress/.temp/pages/login/index.html.js"), meta: {"title":"登录系统"} }],
  ["/project-management/", { loader: () => import(/* webpackChunkName: "project-management_index.html" */"D:/vuepress-starter/docs/.vuepress/.temp/pages/project-management/index.html.js"), meta: {"title":"项目管理"} }],
  ["/workbench/", { loader: () => import(/* webpackChunkName: "workbench_index.html" */"D:/vuepress-starter/docs/.vuepress/.temp/pages/workbench/index.html.js"), meta: {"title":"工作台"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
