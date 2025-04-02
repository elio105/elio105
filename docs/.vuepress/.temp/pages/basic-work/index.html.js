import comp from "D:/vuepress-starter/docs/.vuepress/.temp/pages/basic-work/index.html.vue"
const data = JSON.parse("{\"path\":\"/basic-work/\",\"title\":\"基础工作\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"3. 基础工作\",\"slug\":\"_3-基础工作\",\"link\":\"#_3-基础工作\",\"children\":[{\"level\":3,\"title\":\"3.1 项目管理\",\"slug\":\"_3-1-项目管理\",\"link\":\"#_3-1-项目管理\",\"children\":[]},{\"level\":3,\"title\":\"3.2 人员管理\",\"slug\":\"_3-2-人员管理\",\"link\":\"#_3-2-人员管理\",\"children\":[]},{\"level\":3,\"title\":\"3.3 设备管理\",\"slug\":\"_3-3-设备管理\",\"link\":\"#_3-3-设备管理\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"basic-work/README.md\"}")
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
