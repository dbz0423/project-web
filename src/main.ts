import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// 引入element plus
import ElementPlus from "element-plus";
// 国际化
import { zhCn } from "element-plus/es/locales.mjs";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

// 引入Pinia构造函数
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";
// 实例化Pinia
const pinia = createPinia();
// 使用持久化插件
pinia.use(piniaPersist);

import myConfirm from "./utils/myConfirm";
const app = createApp(App);
// 全局挂载
app.config.globalProperties.$myConfirm = myConfirm;

// 全局注册图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(ElementPlus, { locale: zhCn }).use(router).use(pinia).mount("#app");
