<template>
  <div class="login-account">
    <el-form ref="formRef" :model="phone" :rules="rules" label-width="60px">
      <el-form-item label="手机号:" prop="phone">
        <el-input v-model="phone.number" />
      </el-form-item>
      <el-form-item label="验证码:" prop="verify-code">
        <div class="get-code">
          <el-input v-model="phone.verifyCode" />
          <el-button class="code-btn" type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { rules } from '@/views/login/config/account'
import { reactive } from 'vue'

const phone = reactive({
  number: '',
  verifyCode: ''
})
</script>

<style lang="less" scoped>
.get-code {
  display: flex;

  .code-btn {
    margin-left: 8px;
  }
}
</style>
