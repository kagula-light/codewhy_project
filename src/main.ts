import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store, { setupStore } from './store'
import './assets/css/index.less'
import 'normalize.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { globalRegisterApp } from './global'
import '@/permission.ts'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)
app.use(store)
app.use(globalRegisterApp)
setupStore()
app.mount('#app')
