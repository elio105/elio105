import { GitContributors } from "D:/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_9f6584f4e189731afce176e2e70169c2/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "D:/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_9f6584f4e189731afce176e2e70169c2/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
