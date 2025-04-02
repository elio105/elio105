import comp from "D:/vuepress-starter/docs/.vuepress/.temp/pages/equipment-management/index.html.vue"
const data = JSON.parse("{\"path\":\"/equipment-management/\",\"title\":\"设备管理\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"6. 设备管理\",\"slug\":\"_6-设备管理\",\"link\":\"#_6-设备管理\",\"children\":[{\"level\":3,\"title\":\"6.1 设备信息管理\",\"slug\":\"_6-1-设备信息管理\",\"link\":\"#_6-1-设备信息管理\",\"children\":[]},{\"level\":3,\"title\":\"6.2 设备使用管理\",\"slug\":\"_6-2-设备使用管理\",\"link\":\"#_6-2-设备使用管理\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"equipment-management/README.md\"}")
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
