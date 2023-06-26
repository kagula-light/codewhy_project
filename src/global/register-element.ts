import { App } from "vue"
import "element-plus/dist/index.css"
import {
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElButton,
  ElTable
} from "element-plus/lib/index"

const components = [
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge
]
export default function(app: App): void {
  for (const cpn of components) {
    app.component(cpn.name, cpn)
  }
}
