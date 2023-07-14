<template>
  <div class="login-panel">
    <h1 class="title">coderWhy后台管理系统</h1>
    <el-tabs v-model="currentTab" stretch type="border-card">
      <el-tab-pane name="account">
        <template #label>
          <el-icon>
            <UserFilled />
          </el-icon>
          <span>账号登录</span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <el-icon>
            <Iphone />
          </el-icon>
          <span>手机登录</span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button class="login-button" type="primary" @click="handleLoginClick"
      >立即登录
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { Iphone, UserFilled } from '@element-plus/icons-vue'
import LoginAccount from '@/views/login/components/login-account.vue'
import LoginPhone from '@/views/login/components/login-phone.vue'
import { ref } from 'vue'

const currentTab = ref<string>('account')
const isKeepPassword = ref(true)
const phoneRef = ref<InstanceType<typeof LoginAccount>>()
const accountRef = ref<InstanceType<typeof LoginPhone>>()

const handleLoginClick = () => {
  if (currentTab.value === 'account') {
    accountRef.value?.loginAction(isKeepPassword.value)
  }
}
</script>

<style lang="less" scoped>
.login-panel {
  margin-bottom: 150px;
  width: 420px;

  .title {
    text-align: center;
  }

  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .login-button {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
