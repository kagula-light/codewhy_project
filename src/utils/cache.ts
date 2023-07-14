class localCache {
  // 存于缓存
  setCache(key: string, value: any, isLocalStorage = true) {
    if (isLocalStorage) {
      window.localStorage.setItem(key, JSON.stringify(value))
    }
  }

  // 获取对应缓存数据
  getCache(key: string) {
    const value = window.localStorage.getItem(key)
    console.log(value, '看看')
    if (value) {
      return JSON.parse(value)
    }
  }

  // 删除对应缓存数据
  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }

  // 清空所有缓存
  clearCache() {
    window.localStorage.clear()
  }

  isJSON(value: any) {
    return typeof value === 'object' && value !== null
  }
}

export default new localCache()
