<template>
  <div class="flex flex-row flex-nowrap gap-5 text-[#999999] text-xl cursor-pointer">
    <el-icon @click="handleBack" :color="isFirst ? '#999999' : '#BD8B46'"><Back /></el-icon>
    <el-icon @click="handleForward" :color="isLast ? '#999999' : '#BD8B46'"><Right /></el-icon>
  </div>
</template>
<script setup>
import { Back, Right } from '@element-plus/icons-vue'
import { useBuilderStore, useCurrentPage } from '@/stores/builder.js'
import { toRaw, ref, onUnmounted, onMounted } from 'vue'
import { debounce } from 'lodash-es'
import { useStackWorker } from '@/hooks'

const isFirst = ref(true)
const isLast = ref(true)
let isRecord = true

const { stackWorker, postMessage } = useStackWorker()

const builderStore = useBuilderStore()
let lastPageUid = ''
const postMessageDebounce = debounce((data) => {
  // console.log('clone', data)
  if (data.currentPage.uid !== lastPageUid) postMessage({ type: 'clear' })
  lastPageUid = data.currentPage.uid
  postMessage({ type: 'add', data })
}, 300)

const currentPageStore = useCurrentPage()
currentPageStore.$subscribe(({ events }, state) => {
  if (events.key === 'title') return
  if (!isRecord) {
    isRecord = true
    return
  }
  // console.log('mutaion',events);
  const { currentPage } = toRaw(state)
  const value = currentPage._rawValue
  const data = {
    currentPage: value,
    currentComponent: {
      uid: builderStore.currentComponent.uid
    }
  }
  postMessageDebounce(data)
})

const handleBack = () => {
  if (isFirst.value) return
  postMessage({ type: 'back' })
}

const handleForward = () => {
  if (isLast.value) return
  postMessage({ type: 'forward' })
}

stackWorker.onmessage = ({ data }) => {
  console.log(data)
  isFirst.value = data.isFirst
  isLast.value = data.isLast
  if (data.data) {
    isRecord = false
    const { currentComponent, currentPage } = data.data
    const idx = builderStore.pageStack.findIndex((i) => i.uid === currentPage.uid)
    currentPage.title = builderStore.currentPage.title
    builderStore.currentPage = currentPage
    builderStore.pageStack[idx] = currentPage
    builderStore.currentComponent =
      currentPage.components.find((i) => i.uid === currentComponent.uid) || {}
  }
}
onMounted(() => {
  postMessageDebounce({
    currentPage: toRaw(builderStore.currentPage),
    currentComponent: {
      uid: builderStore.currentComponent.uid
    }
  })
})
onUnmounted(() => {
  postMessage({ type: 'clear' })
  stackWorker.terminate()
})
</script>
