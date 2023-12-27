<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="form" class="login-form" label-position="top">
      <h2 class="login-title">登录</h2>
      <el-form-item label="用户名">
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="主题色">
        <el-color-picker v-model="themeColor" @change="setThemeColor" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="open">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { useTheme } from '@/hooks'
import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

const form = ref({
  username: '',
  password: ''
})
const [themeColor, setThemeColor] = useTheme()

const open = () => {
  ElMessageBox.prompt('Please input your e-mail', 'Tip', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    inputPattern:
      /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
    inputErrorMessage: 'Invalid Email'
  })
    .then(({ value }) => {
      ElMessage({
        type: 'success',
        message: `Your email is:${value}`
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Input canceled'
      })
    })
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* background: linear-gradient(135deg, #e66465, #9198e5); */
  background: var(--el-color-primary-light-3);
}

.login-form {
  width: 320px;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.login-title {
  font-size: 24px;
  text-align: center;
  margin-bottom: 24px;
  color: var(--el-color-primary-light-3);
}
</style>
