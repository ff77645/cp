<template>
  <div class="">
    <div class="py-3 border-b border-[#D8D8D8] border-solid text-[#464C5B] font-bold text-lg">
      间隔
    </div>
    <Collapse class="px-0 py-4" title="间隔设置">
      <div class="flex flex-row flex-nowrap gap-6 items-center">
        <span class="text-nowrap text-[#666666] text-sm w-20">背景颜色</span>
        <el-color-picker v-model="m.style.backgroundColor" />
      </div>
      <div class="flex flex-row flex-nowrap gap-6 items-center mt-4">
        <span class="text-nowrap text-[#666666] text-sm">间隔高度</span>
        <el-slider
          v-model="spaceHeight"
          :max="100"
          :show-input-controls="false"
          size="small"
          show-input
        />
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

const spaceHeight = computed({
  get: () => parseInt(m.value.style.height),
  set: (val) => (m.value.style.height = val + 'px')
})
</script>
