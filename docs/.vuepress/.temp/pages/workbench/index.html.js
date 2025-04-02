import comp from "D:/vuepress-starter/docs/.vuepress/.temp/pages/workbench/index.html.vue"
const data = JSON.parse("{\"path\":\"/workbench/\",\"title\":\"工作台\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"2. 工作台\",\"slug\":\"_2-工作台\",\"link\":\"#_2-工作台\",\"children\":[{\"level\":3,\"title\":\"2.1 首页\",\"slug\":\"_2-1-首页\",\"link\":\"#_2-1-首页\",\"children\":[]},{\"level\":3,\"title\":\"2.2 项目列表\",\"slug\":\"_2-2-项目列表\",\"link\":\"#_2-2-项目列表\",\"children\":[]},{\"level\":3,\"title\":\"2.3 快捷入口\",\"slug\":\"_2-3-快捷入口\",\"link\":\"#_2-3-快捷入口\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"workbench/README.md\"}")
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
