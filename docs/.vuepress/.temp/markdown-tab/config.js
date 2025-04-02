import { CodeTabs } from "D:/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-t_66741aab67a78b8a8fa3725d97c8a2fb/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-t_66741aab67a78b8a8fa3725d97c8a2fb/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-t_66741aab67a78b8a8fa3725d97c8a2fb/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
