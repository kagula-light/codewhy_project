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
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElIcon,
  ElInput,
  ElLink,
  ElTable,
  ElTabPane,
  ElTabs
} from "element-plus/lib/index"

const components = [
  ElButton,
  ElTable,
  ElIcon,
  ElInput,
  ElCheckbox,
  ElLink,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElForm,
  ElFormItem,
  ElTabs,
  ElTabPane
]
export default function(app: App): void {
  for (const cpn of components) {
    app.component(cpn.name, cpn)
  }
}
