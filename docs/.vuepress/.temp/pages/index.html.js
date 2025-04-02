import comp from "D:/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"项目级DIM操作手册\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1741596104000,\"contributors\":[{\"name\":\"elio105\",\"username\":\"elio105\",\"email\":\"elio_1983@163.com\",\"commits\":1,\"url\":\"https://github.com/elio105\"}],\"changelog\":[{\"hash\":\"a09a1ed130c883b30e860db1be51c9e3c31012c7\",\"time\":1741596104000,\"email\":\"elio_1983@163.com\",\"author\":\"elio105\",\"message\":\"初次提交项目代码\"}]},\"filePathRelative\":\"README.md\"}")
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
