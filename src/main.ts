import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import httpRequestMethod from "@/service"
import { globalRegisterApp } from "./global"
// import ElementPlus from "element-plus"
// import "element-plus/dist/index.css"
const app = createApp(App)
// app.use(ElementPlus)
app.use(router)
app.use(store)
app.use(globalRegisterApp)
// registerApp(app)
httpRequestMethod.request({
  url: "/goods",
  method: "post",
  interceptors: {
    requestInterceptor: (config) => {
      return config
    }
  }
})
app.mount("#app")
