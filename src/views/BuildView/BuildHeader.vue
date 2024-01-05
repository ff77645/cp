<template>
  <header
    style="box-shadow: 0px 2px 8px 1px rgba(95, 95, 95, 0.08)"
    class="h-[56px] flex flex-row justify-between flex-none"
  >
    <!-- header-left -->
    <div class="flex flex-row items-center gap-4">
      <HeaderBack></HeaderBack>
      <FullScreen size="26"></FullScreen>
      <div class="text-[16px]">
        <span class="text-[#999999]">当前页面: </span>
        <span class="text-[#464C5B]"> 首页</span>
      </div>
      <div class="flex flex-row flex-nowrap gap-5 text-[#999999] text-xl cursor-pointer">
        <el-icon @click="handleBack" :color="currentIndex <= 0 ? '#999999' : '#BD8B46'"
          ><Back
        /></el-icon>
        <el-icon
          @click="handleForward"
          :color="currentIndex + 1 >= storeCache.length ? '#999999' : '#BD8B46'"
          ><Right
        /></el-icon>
      </div>
    </div>
    <!-- header-right -->
    <div class="flex flex-row items-center pr-4">
      <el-button plain round>企宣</el-button>
      <el-button plain round>设置</el-button>
      <el-button plain round>主题色</el-button>
      <el-button plain round>预览</el-button>
      <el-button plain round>保存</el-button>
      <el-button type="primary" round>发布</el-button>
    </div>
  </header>
</template>
<script setup>
import { Back, Right } from '@element-plus/icons-vue'
import FullScreen from '@/components/FullScreen.vue'
import HeaderBack from './components/HeaderBack.vue'
import { useBuilderStore } from '@/stores/builder.js'
import { toRaw, unref, shallowReactive, ref, watch } from 'vue'
import { cloneDeep } from 'lodash-es'

let storeCache = shallowReactive([])
const currentIndex = ref(0)
let isClone = true

const builderStore = useBuilderStore()

watch(
  builderStore.currentPage,
  (value) => {
    if (!isClone) {
      isClone = true
      return
    }
    if (currentIndex.value !== storeCache.length - 1) {
      storeCache = storeCache.slice(0, currentIndex.value + 1)
    }
    const cloneValue = cloneDeep(toRaw(unref(value)))
    storeCache.push(cloneValue)
    currentIndex.value = storeCache.length - 1
    console.log({ storeCache, cloneValue, currentIndex: currentIndex.value })
  },
  {
    immediate: true,
    deep: true,
    flush: 'post'
  }
)

const handleBack = () => {
  isClone = false
  if (currentIndex.value < 1) return
  currentIndex.value--
  const value = storeCache.at(currentIndex.value)
  // console.log({storeCache,value,currentIndex:currentIndex.value});
  builderStore.$patch({
    currentPage: cloneDeep(value)
  })
}

const handleForward = () => {
  isClone = false
  if (currentIndex.value >= storeCache.length - 1) return
  currentIndex.value++
  const value = storeCache.at(currentIndex.value)
  // console.log({storeCache,value,currentIndex:currentIndex.value});
  builderStore.$patch({
    currentPage: cloneDeep(value)
  })
}
</script>
