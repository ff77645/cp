<template>
  <div class="">
    <div class="py-3 border-b border-[#D8D8D8] border-solid text-[#464C5B] font-bold text-lg">
      文本
    </div>
    <Collapse class="px-0 py-4" title="文本设置"> </Collapse>
    <Collapse class="" title="样式设置">
      <div class="flex flex-row flex-nowrap gap-6 items-center mt-4">
        <span class="text-nowrap text-[#666666] text-sm w-20">文本框颜色</span>
        <el-color-picker v-model="m.style.borderColor" />
      </div>
    </Collapse>
  </div>
</template>
<script setup>
import Collapse from '@/components/Collapse.vue'
import { useBuilderStore } from '@/stores/builder.js'
import { storeToRefs } from 'pinia'
// eslint-disable-next-line no-unused-vars
import ElInput from '@/components/ElInput'

const builderStore = useBuilderStore()
// eslint-disable-next-line no-unused-vars
const { currentComponent: m } = storeToRefs(builderStore)
</script>
