<template>
  <div class="cursor-pointer" @click="toggle">
    <el-icon :size="size" v-if="isFullscreen"><Platform /></el-icon>
    <el-icon :size="size" v-else><Monitor /></el-icon>
  </div>
</template>
<script setup>
import { useFullscreen } from '@vueuse/core'
import { Platform, Monitor } from '@element-plus/icons-vue'

defineProps({
  size: {
    type: String,
    default: '16px'
  }
})

const { isFullscreen, toggle } = useFullscreen()
</script>
