<template>
  <div class="">
    <div class="py-3 border-b border-[#D8D8D8] border-solid text-[#464C5B] font-bold text-lg">
      图文导航
    </div>
    <Collapse class="px-0 py-4" title="内容设置">
      <p class="text-sm text-[#666666]">
        导航数量 <span class="text-xs text-[#999999]">(每行)</span>
      </p>
      <el-radio-group class="mt-3" v-model="m.style['--cols']">
        <el-radio v-for="item in colsOptions" :key="item.value" :label="item.value">{{
          item.name
        }}</el-radio>
      </el-radio-group>
      <p class="text-sm text-[#666666] mt-4">导航内容</p>
      <p class="text-xs text-[#999999] mt-2">(推荐图片尺寸为48*48像素，或正方形)</p>
    </Collapse>
    <Collapse class="" title="样式设置">
      <div class="flex flex-row flex-nowrap gap-6 items-center">
        <span class="text-nowrap text-[#666666] text-sm w-20">背景颜色</span>
        <el-color-picker v-model="m.style['--bg-color']" />
      </div>
      <div class="flex flex-row flex-nowrap gap-6 items-center mt-4">
        <span class="text-nowrap text-[#666666] text-sm w-20">文字颜色</span>
        <el-color-picker v-model="m.style['--text-color']" />
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
const { currentComponent: m } = storeToRefs(builderStore)

const colsOptions = [
  {
    name: '三个',
    value: '3'
  },
  {
    name: '四个',
    value: '4'
  },
  {
    name: '五个',
    value: '5'
  }
]
</script>
