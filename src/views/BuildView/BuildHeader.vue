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
        <el-icon @click="handleBack" :color="isFirst ? '#999999' : '#BD8B46'"><Back /></el-icon>
        <el-icon @click="handleForward" :color="isLast ? '#999999' : '#BD8B46'"><Right /></el-icon>
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
import { toRaw, ref, onUnmounted, watch } from 'vue'
import { debounce } from 'lodash-es'

const isFirst = ref(true)
const isLast = ref(true)
let isRecord = true

const url = new URL('../../utils/stack-worker.js', import.meta.url)
const stackWorker = new Worker(url)

const builderStore = useBuilderStore()
const postMessage = debounce((data) => {
  stackWorker.postMessage({ type: 'add', data })
}, 300)

watch(
  builderStore.currentPage,
  (value) => {
    if (!isRecord || builderStore.noRecord) {
      isRecord = true
      return
    }
    const data = {
      currentPage: toRaw(value),
      currentComponent: {
        uid: builderStore.currentComponent.uid
      }
    }
    postMessage(data)
  },
  {
    immediate: true,
    // deep: true,
    flush: 'post'
  }
)

const handleBack = () => {
  if (isFirst.value) return
  stackWorker.postMessage({ type: 'back' })
}

const handleForward = () => {
  if (isLast.value) return
  stackWorker.postMessage({ type: 'forward' })
}

stackWorker.onmessage = ({ data }) => {
  isFirst.value = data.isFirst
  isLast.value = data.isLast
  if (data.data) {
    isRecord = false
    const { currentComponent, currentPage } = data.data
    builderStore.$patch({
      currentPage
    })
    builderStore.currentComponent =
      currentPage.components.find((i) => i.uid === currentComponent.uid) || {}
  }
}
onUnmounted(() => {
  stackWorker.postMessage({ type: 'clear' })
  stackWorker.terminate()
})
</script>
