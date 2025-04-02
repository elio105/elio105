import comp from "D:/vuepress-starter/docs/.vuepress/.temp/pages/login/index.html.vue"
const data = JSON.parse("{\"path\":\"/login/\",\"title\":\"登录系统\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"1. 登陆系统\",\"slug\":\"_1-登陆系统\",\"link\":\"#_1-登陆系统\",\"children\":[{\"level\":3,\"title\":\"1.1 PC端登录方法\",\"slug\":\"_1-1-pc端登录方法\",\"link\":\"#_1-1-pc端登录方法\",\"children\":[]},{\"level\":3,\"title\":\"1.2 移动端登录方法\",\"slug\":\"_1-2-移动端登录方法\",\"link\":\"#_1-2-移动端登录方法\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"login/README.md\"}")
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
