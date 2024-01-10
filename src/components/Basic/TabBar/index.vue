<template>
  <div
    ref="current"
    class="tabbar no-drag box-border flex flex-row flex-nowrap bg-[var(--bg-color)] fixed-bottom"
    :style="data.style"
  >
    <div v-for="i in 3" :key="i" class="flex-1 flex flex-col items-center text-center">
      <div class="p-1">
        <img class="w-5 h-5" src="http://pic.yupoo.com/isfy666/1a8ef780/0283a8b7.jpg" alt="" />
      </div>
      <div class="text-[var(--text-color)] text-sm">首页{{ i }}</div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue'
defineProps({
  isEdit: {
    type: Boolean,
    default: false
  },
  data: {
    type: Object,
    default: () => ({})
  }
})

const current = ref(null)

onMounted(() => {
  const parent = current.value.parentNode
  parent.style.paddingBottom = '48px'
})
onBeforeUnmount(() => {
  const parent = current.value.parentNode
  parent.style.paddingBottom = '0'
})
</script>
<style lang="scss" scoped>
.tabbar {
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.3);
}
.fixed-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 20;
}
</style>
