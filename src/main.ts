import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store, { setupStore } from "./store"
import "./assets/css/index.less"
import "normalize.css"
import * as ElementPlusIconsVue from "@element-plus/icons-vue"
import { globalRegisterApp } from "./global"
import "@/permission.ts"
// import ElementPlus from "element-plus"
// import "element-plus/dist/index.less"
const app = createApp(App)
// app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)
app.use(store)
app.use(globalRegisterApp)
setupStore()
app.mount("#app")
