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

// const currentIndex = ref(0)
// const total = ref(0)
const isFirst = ref(true)
const isLast = ref(true)
let isClone = true

const url = new URL('../../utils/stack-worker.js', import.meta.url)
const stackWorker = new Worker(url)

const builderStore = useBuilderStore()

// builderStore.$subscribe((mutation,state)=>{
//   if (!isClone) {
//     isClone = true
//     return
//   }
//   const {
//     currentComponent,
//     currentPage
//   } = state
//   const data = {
//     currentComponent:{
//       uid:currentComponent.uid
//     },
//     currentPage:toRaw(currentPage),
//   }
//   // if (currentIndex.value !== total.value) {
//   //   stackWorker.postMessage({ type: 'update' })
//   // }
//   stackWorker.postMessage({ type: 'add', data })
// })

watch(
  builderStore.currentPage,
  (value) => {
    if (!isClone) {
      isClone = true
      return
    }
    // if (currentIndex.value !== storeCache.length - 1) {
    //   storeCache = storeCache.slice(0, currentIndex.value + 1)
    // }
    // const cloneValue = cloneDeep(toRaw(unref(value)))
    // storeCache.push(cloneValue)
    // currentIndex.value = storeCache.length - 1
    // console.log({ storeCache, cloneValue, currentIndex: currentIndex.value })
    // console.log('watch data:', { currentPage })
    const currentPage = toRaw(value)
    const data = {
      currentPage,
      currentComponent: {
        uid: builderStore.currentComponent.uid
      }
    }
    console.log('add')
    stackWorker.postMessage({ type: 'add', data })
  },
  {
    immediate: true,
    // deep: true,
    flush: 'post'
  }
)

const handleBack = () => {
  // isClone = false
  // if (currentIndex.value < 1) return
  // currentIndex.value--
  // const value = storeCache.at(currentIndex.value)
  // // console.log({storeCache,value,currentIndex:currentIndex.value});
  // builderStore.$patch({
  //   currentPage: cloneDeep(value)
  // })
  // if (currentIndex.value <= 1) return
  if (isFirst.value) return
  stackWorker.postMessage({ type: 'back' })
}

const handleForward = () => {
  // if (currentIndex.value >= total.value) return
  if (isLast.value) return
  stackWorker.postMessage({ type: 'forward' })
  // console.log('handleForward');
  // isClone = false
  // if (currentIndex.value >= storeCache.length - 1) return
  // currentIndex.value++
  // const value = storeCache.at(currentIndex.value)
  // // console.log({storeCache,value,currentIndex:currentIndex.value});
  // builderStore.$patch({
  //   currentPage: cloneDeep(value)
  // })
}

stackWorker.onmessage = ({ data }) => {
  // currentIndex.value = data.current
  // total.value = data.total
  isFirst.value = data.isFirst
  isLast.value = data.isLast
  console.log('onmessage', data)
  if (data.data) {
    isClone = false
    const { currentComponent, currentPage } = data.data

    // builderStore.currentPage = currentPage
    builderStore.$patch({
      currentPage
    })
    builderStore.currentComponent =
      builderStore.currentPage.components.find((i) => i.uid === currentComponent.uid) || {}
  }
}
// stackWorker.postMessage({type:'init'})
onUnmounted(() => {
  stackWorker.postMessage({ type: 'clear' })
  stackWorker.terminate()
})
</script>
