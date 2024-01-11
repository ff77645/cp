<script setup>
import { ElConfigProvider } from 'element-plus'
import { useTheme } from '@/hooks'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
useTheme()
</script>

<template>
  <el-config-provider :locale="zhCn">
    <RouterView />
  </el-config-provider>
</template>
