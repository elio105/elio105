import comp from "D:/vuepress-starter/docs/.vuepress/.temp/pages/project-management/index.html.vue"
const data = JSON.parse("{\"path\":\"/project-management/\",\"title\":\"项目管理\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"4. 项目管理\",\"slug\":\"_4-项目管理\",\"link\":\"#_4-项目管理\",\"children\":[{\"level\":3,\"title\":\"4.1 项目进度管理\",\"slug\":\"_4-1-项目进度管理\",\"link\":\"#_4-1-项目进度管理\",\"children\":[]},{\"level\":3,\"title\":\"4.2 项目质量管理\",\"slug\":\"_4-2-项目质量管理\",\"link\":\"#_4-2-项目质量管理\",\"children\":[]},{\"level\":3,\"title\":\"4.3 项目安全管理\",\"slug\":\"_4-3-项目安全管理\",\"link\":\"#_4-3-项目安全管理\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"project-management/README.md\"}")
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
