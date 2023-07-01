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
// 响应成功的拦截器返回的是AxiosResponse类型，但是我们做了一个自定义，返回他值里面的data数据，这里就是定义了这个data数据的类型
interface DataType {
  data: any
  returnCode?: string
  success: boolean
}

// DataType类型对应的是请求类中的泛型T
httpRequestMethod
  .get<DataType>({
    url: "/home/multidata",
    showLoading: true,
    interceptors: {
      requestInterceptor: (config) => {
        console.log("单个拦截器")
        return config
      }
    }
  })
  .then((res) => {
    console.log(res)
  })
app.mount("#app")
