import router from '@/router'
import localCache from '@/utils/cache'

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      localCache.clearCache()
      return '/login'
    }
  }
})
