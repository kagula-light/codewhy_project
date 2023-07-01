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
interface DataType {
  data: any
  returnCode?: string
  success: boolean
}

httpRequestMethod
  .get<DataType>({
    url: "/home/multidata",
    showLoading: true
  })
  .then((res) => {
    console.log(res)
  })
app.mount("#app")
