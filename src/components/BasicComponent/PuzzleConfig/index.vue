<template>
  <div class="">
    <div class="py-3 border-b border-[#D8D8D8] border-solid text-[#464C5B] font-bold text-lg">
      文本
    </div>
    <Collapse class="px-0 py-4" title="文本设置">
      <p class="text-[#666666] text-sm">图片布局</p>
      <div class="flex flex-wrap gap-3 mt-3">
        <div
          v-for="i in layoutOptions"
          class="border border-solid rounded flex flex-col justify-center items-center gap-2 py-1 px-2 cursor-pointer"
          :class="
            m.config.layoutType === i.class
              ? 'text-[#BD8B46] border-[#BD8B46]'
              : 'text-[#999999] border-[#E6E6E6]'
          "
          :key="i.class"
          @click="selectType(i)"
        >
          <PuzzleModel
            :active="i.class === m.config.layoutType"
            :length="i.length"
            :class-name="i.class"
            class="h-8 w-9"
          ></PuzzleModel>
          <p class="text-xs">{{ i.name }}</p>
        </div>
      </div>
    </Collapse>
    <Collapse class="" title="样式设置">
      <div class="flex flex-row flex-nowrap gap-6 items-center mt-4">
        <span class="text-nowrap text-[#666666] text-sm">上下边距</span>
        <el-slider
          v-model="paddingX"
          :max="20"
          :show-input-controls="false"
          size="small"
          show-input
        />
      </div>
      <div class="flex flex-row flex-nowrap gap-6 items-center mt-4">
        <span class="text-nowrap text-[#666666] text-sm">左右边距</span>
        <el-slider
          v-model="paddingY"
          :max="20"
          :show-input-controls="false"
          size="small"
          show-input
        />
      </div>
      <div class="flex flex-row flex-nowrap gap-6 items-center mt-4">
        <span class="text-nowrap text-[#666666] text-sm">图片间距</span>
        <el-slider
          v-model="puzzleGap"
          :max="20"
          :show-input-controls="false"
          size="small"
          show-input
        />
      </div>
      <div class="flex flex-row flex-nowrap gap-6 items-center mt-4">
        <span class="text-nowrap text-[#666666] text-sm">背景颜色</span>
        <el-color-picker v-model="m.style.backgroundColor" />
      </div>
    </Collapse>
  </div>
</template>
<script setup>
import Collapse from '@/components/Collapse.vue'
import { useBuilderStore } from '@/stores/builder.js'
import { storeToRefs } from 'pinia'
import PuzzleModel from './PuzzleModel.vue'
import { computed } from 'vue'

const builderStore = useBuilderStore()
const { currentComponent: m } = storeToRefs(builderStore)

const selectType = (i) => {
  m.value.config.layoutType = i.class
  m.value.config.imgList = Array.from({ length: i.length }).fill({
    src: 'http://pic.yupoo.com/isfy666/695a996e/393b433f.jpg',
    name: 'test',
    link: ''
  })
}
const paddingX = computed({
  get() {
    return parseInt(m.value.style.paddingTop)
  },
  set(val) {
    m.value.style.paddingTop = val + 'px'
    m.value.style.paddingBottom = val + 'px'
  }
})
const paddingY = computed({
  get() {
    return parseInt(m.value.style.paddingLeft)
  },
  set(val) {
    m.value.style.paddingLeft = val + 'px'
    m.value.style.paddingRight = val + 'px'
  }
})
const puzzleGap = computed({
  get() {
    return parseInt(m.value.style['--puzzle-gap'])
  },
  set(val) {
    m.value.style['--puzzle-gap'] = val + 'px'
  }
})

const layoutOptions = [
  {
    name: '1行2个',
    class: 'r2',
    length: 2
  },
  {
    name: '1行3个',
    class: 'r3',
    length: 3
  },
  {
    name: '1行4个',
    class: 'r4',
    length: 4
  },
  {
    name: '2左2右',
    class: 'l2-r2',
    length: 4
  },
  {
    name: '1左2右',
    class: 'l1-r2',
    length: 3
  },
  {
    name: '1上2下',
    class: 't1-b2',
    length: 3
  },
  {
    name: '1左3右',
    class: 'l1-r3',
    length: 4
  }
]
</script>
