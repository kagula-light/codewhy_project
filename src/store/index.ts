import { createStore, Store, useStore as useVuexStore } from "vuex"
import login from "@/store/login/login"
import { IRootState, IStoreType } from "@/store/types"

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

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
