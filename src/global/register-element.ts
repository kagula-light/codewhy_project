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
  ElContainer,
  ElForm,
  ElFormItem,
  ElHeader,
  ElIcon,
  ElInput,
  ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
  ElTable,
  ElTabPane,
  ElTabs
} from "element-plus/lib/index"

const components = [
  ElMenu,
  ElSubMenu,
  ElMenuItemGroup,
  ElMenuItem,
  ElButton,
  ElTable,
  ElIcon,
  ElInput,
  ElCheckbox,
  ElLink,
  ElAlert,
  ElAside,
  ElContainer,
  ElHeader,
  ElMain,
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
