import comp from "D:/vuepress-starter/docs/.vuepress/.temp/pages/appendix/index.html.vue"
const data = JSON.parse("{\"path\":\"/appendix/\",\"title\":\"附件\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"7. 附件\",\"slug\":\"_7-附件\",\"link\":\"#_7-附件\",\"children\":[{\"level\":3,\"title\":\"7.1 常见问题解答\",\"slug\":\"_7-1-常见问题解答\",\"link\":\"#_7-1-常见问题解答\",\"children\":[]},{\"level\":3,\"title\":\"7.2 系统操作流程图\",\"slug\":\"_7-2-系统操作流程图\",\"link\":\"#_7-2-系统操作流程图\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"appendix/README.md\"}")
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
