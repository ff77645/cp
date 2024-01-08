<template>
  <div class="">
    <div class="py-3 border-b border-[#D8D8D8] border-solid text-[#464C5B] font-bold text-lg">
      分割线
    </div>
    <Collapse class="px-0 py-4" title="分割线设置">
      <p class="text-[#666666] text-sm">线条样式</p>
      <ul class="mt-3">
        <li
          v-for="style in borderStyle"
          :key="style"
          :style="{
            borderColor: m.style['--border-style'] === style ? '#BD8B46' : '#E6E6E6'
          }"
          class="mb-2 rounded border border-solid px-2 py-4"
          @click="m.style['--border-style'] = style"
        >
          <div
            :style="{
              borderStyle: style,
              borderColor: m.style['--border-style'] === style ? '#464C5B' : '#999999'
            }"
            class="border-t"
          ></div>
        </li>
      </ul>
      <div class="flex flex-row flex-nowrap gap-6 items-center">
        <span class="text-nowrap text-[#666666] text-sm w-20">线条颜色</span>
        <el-color-picker v-model="m.style['--border-color']" />
      </div>
      <div class="flex flex-row flex-nowrap gap-6 items-center mt-4">
        <span class="text-nowrap text-[#666666] text-sm">线条高度</span>
        <el-slider
          v-model="borderWidth"
          :max="10"
          :min="1"
          :show-input-controls="false"
          size="small"
          show-input
        />
      </div>
      <div class="flex flex-row flex-nowrap gap-6 items-center mt-4">
        <span class="text-nowrap text-[#666666] text-sm">上下边距</span>
        <el-slider
          v-model="paddingY"
          :max="20"
          :show-input-controls="false"
          size="small"
          show-input
        />
      </div>
      <div class="flex flex-row flex-nowrap gap-6 items-center mt-4">
        <span class="text-nowrap text-[#666666] text-sm">左右边距</span>
        <el-slider
          v-model="paddingX"
          :max="20"
          :show-input-controls="false"
          size="small"
          show-input
        />
      </div>
      <div class="flex flex-row flex-nowrap gap-6 items-center mt-3">
        <span class="text-nowrap text-[#666666] text-sm w-20">背景颜色</span>
        <el-color-picker v-model="m.style['--bg-color']" />
      </div>
    </Collapse>
  </div>
</template>
<script setup>
import Collapse from '@/components/Collapse.vue'
import { useBuilderStore } from '@/stores/builder.js'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const builderStore = useBuilderStore()
const { currentComponent: m } = storeToRefs(builderStore)

const borderWidth = computed({
  get: () => parseInt(m.value.style['--border-width']),
  set: (val) => (m.value.style['--border-width'] = val + 'px')
})

const borderStyle = ['solid', 'dashed', 'dotted']

const paddingX = computed({
  get: () => parseInt(m.value.style['--padding-x']),
  set: (val) => (m.value.style['--padding-x'] = val + 'px')
})
const paddingY = computed({
  get: () => parseInt(m.value.style['--padding-y']),
  set: (val) => (m.value.style['--padding-y'] = val + 'px')
})
</script>
