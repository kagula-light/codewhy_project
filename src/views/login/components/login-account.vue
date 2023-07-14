<template>
  <div class="login-account">
    <el-form ref="formRef" :model="account" :rules="rules" label-width="60px">
      <el-form-item label="账号:" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input v-model="account.password" show-password type="password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { rules } from '@/views/login/config/account'
import { ElForm } from 'element-plus/lib/index'
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import localCache from '@/utils/cache'

const store = useStore()
const account = reactive({
  name: localCache.getCache('name') ?? '',
  password: localCache.getCache('password') ?? ''
})
const formRef = ref<InstanceType<typeof ElForm>>()

const loginAction = (isKeepPassword: boolean) => {
  formRef.value?.validate((valid) => {
    if (valid) {
      // 是否需要记住密码
      if (isKeepPassword) {
        // 本地缓存
        localCache.setCache('name', account.name)
        localCache.setCache('password', account.password)
      } else {
        localCache.deleteCache('name')
        localCache.deleteCache('password')
      }

      // 开始登录
      store.dispatch('login/accountLoginAction', { ...account })
    }
  })
  console.log(formRef, '子组件登录')
}
defineExpose({
  account,
  loginAction
})
</script>

<style scoped></style>
