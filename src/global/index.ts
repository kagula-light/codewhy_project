import { App } from 'vue'
import registerElement from '@/global/register-element'

export function globalRegisterApp(app: App) {
  registerElement(app)
}
