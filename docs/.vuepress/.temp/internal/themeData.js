export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"登录系统\",\"link\":\"/login/\"},{\"text\":\"工作台\",\"link\":\"/workbench/\"},{\"text\":\"基础工作\",\"link\":\"/basic-work/\"},{\"text\":\"项目管理\",\"link\":\"/project-management/\"},{\"text\":\"人员管理\",\"link\":\"/personnel-management/\"},{\"text\":\"设备管理\",\"link\":\"/equipment-management/\"},{\"text\":\"附件\",\"link\":\"/appendix/\"}],\"sidebar\":{\"/login/\":[{\"text\":\"登录系统\",\"link\":\"/login/\"}],\"/workbench/\":[{\"text\":\"工作台\",\"link\":\"/workbench/\"}],\"/basic-work/\":[{\"text\":\"基础工作\",\"link\":\"/basic-work/\"}],\"/project-management/\":[{\"text\":\"项目管理\",\"link\":\"/project-management/\"}],\"/personnel-management/\":[{\"text\":\"人员管理\",\"link\":\"/personnel-management/\"}],\"/equipment-management/\":[{\"text\":\"设备管理\",\"link\":\"/equipment-management/\"}],\"/appendix/\":[{\"text\":\"附件\",\"link\":\"/appendix/\"}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
