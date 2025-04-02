import comp from "D:/vuepress-starter/docs/.vuepress/.temp/pages/personnel-management/index.html.vue"
const data = JSON.parse("{\"path\":\"/personnel-management/\",\"title\":\"人员管理\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"5. 人员管理\",\"slug\":\"_5-人员管理\",\"link\":\"#_5-人员管理\",\"children\":[{\"level\":3,\"title\":\"5.1 人员信息管理\",\"slug\":\"_5-1-人员信息管理\",\"link\":\"#_5-1-人员信息管理\",\"children\":[]},{\"level\":3,\"title\":\"5.2 人员权限管理\",\"slug\":\"_5-2-人员权限管理\",\"link\":\"#_5-2-人员权限管理\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"personnel-management/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
