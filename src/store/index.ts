import { createStore } from "vuex"

import login from "@/store/login/login"
import { IRootState } from "@/store/types"

const store = createStore<IRootState>({
  state: {
    name: "",
    age: 0
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login
  }
})

// vuex初始化
export function setupStore() {
  store.dispatch("login/loadLocalLogin")
}

export default store
