<template>
  <section
    :style="{
      height: screenHeight + 'px',
      width: screenWidth + 'px'
    }"
    class="bg-white flex flex-col flex-nowrap"
  >
    <!-- statusBar -->
    <div
      :style="{
        height: statusBarHeight + 'px'
      }"
      class="flex-none flex flex-row justify-between items-center box-border px-3 text-sm"
    >
      <span class="">{{ dateFormat(now) }}</span>
      <div class="flex flex-row gap-1">
        <el-icon><ChatSquare /></el-icon>
        <el-icon><Position /></el-icon>
      </div>
    </div>
    <!-- nav bar -->
    <div
      :style="{
        height: navBarHeight + 'px'
      }"
      class="flex-none flex flex-row justify-between px-2 items-center"
    >
      <div class="flex-1">
        <el-icon size="20px"><ArrowLeft /></el-icon>
      </div>
      <div style="flex: 2" class="text-center overflow-hidden text-ellipsis whitespace-nowrap">
        首页
      </div>
      <div class="flex-1 flex justify-end">
        <div
          class="h-[32px] flex flex-row items-center gap-2 px-3 border border-solid border-[#EAEAEA] rounded-[16px]"
        >
          <el-icon size="18px"><MoreFilled /></el-icon>
          <el-divider direction="vertical" />
          <el-icon size="18px"><CirclePlusFilled /></el-icon>
        </div>
      </div>
    </div>
    <div class="flex-1 overflow-hidden">
      <slot></slot>
    </div>
  </section>
</template>
<script setup>
import { unref } from 'vue'
import { useNow } from '@vueuse/core'
import {
  ChatSquare,
  Position,
  ArrowLeft,
  MoreFilled,
  CirclePlusFilled
} from '@element-plus/icons-vue'

const statusBarHeight = 20
const navBarHeight = 46
// const tabbarHeight = 50
const screenHeight = 736
const screenWidth = 414
const now = useNow()

const dateFormat = (date) => {
  date = unref(date)
  return `${date.getHours()}:${date.getMinutes()}`
}
</script>
