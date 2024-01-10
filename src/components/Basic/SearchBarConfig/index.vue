<template>
  <div class="">
    <div class="py-3 border-b border-[#D8D8D8] border-solid text-[#464C5B] font-bold text-lg">
      搜索框
    </div>
    <Collapse class="px-0 py-4" title="内容设置">
      <p class="text-[#666666] text-sm">提示文字</p>
      <el-input
        v-model="m.config.placeholder"
        size="large"
        class="mt-3"
        placeholder="请输入关键字进行搜索"
      />
      <p class="text-[#666666] text-sm mt-5">框体样式</p>
      <ul class="flex flex-col gap-3 mt-3">
        <li
          class="border border-solid rounded cursor-pointer overflow-hidden"
          :class="m.style['--border-radius'] === value ? 'border-[#BD8B46]' : 'border-[#E6E6E6]'"
          v-for="value in styleList"
          :key="value"
          @click="m.style['--border-radius'] = value"
        >
          <SearchBar
            class="py-1 px-3 pointer-events-none"
            isEdit
            :data="getData(value)"
          ></SearchBar>
        </li>
      </ul>
      <div class="flex flex-row flex-nowrap gap-6 items-center mt-4 justify-between">
        <span class="text-nowrap text-[#666666] text-sm">搜索图标</span>
        <el-switch v-model="m.config.showIcon" size="large" />
      </div>
    </Collapse>
    <Collapse class="" title="样式设置">
      <div class="flex flex-row flex-nowrap gap-6 items-center mt-4">
        <span class="text-nowrap text-[#666666] text-sm w-20">背景颜色</span>
        <el-color-picker v-model="m.style['--bg-color']" />
      </div>
      <div class="flex flex-row flex-nowrap gap-6 items-center mt-4">
        <span class="text-nowrap text-[#666666] text-sm w-20">框体颜色</span>
        <el-color-picker v-model="m.style['--content-color']" />
      </div>
      <div class="flex flex-row flex-nowrap gap-6 items-center mt-4">
        <span class="text-nowrap text-[#666666] text-sm w-20">边框颜色</span>
        <el-color-picker v-model="m.style['--border-color']" />
      </div>
      <div class="flex flex-row flex-nowrap gap-6 items-center mt-4">
        <span class="text-nowrap text-[#666666] text-sm w-20">框内文字</span>
        <el-radio-group v-model="m.style['--text-align']">
          <el-radio-button v-for="item in textAlignConfig" :key="item.value" :label="item.value">{{
            item.label
          }}</el-radio-button>
        </el-radio-group>
      </div>
      <div class="flex flex-row flex-nowrap gap-6 items-center mt-4">
        <span class="text-nowrap text-[#666666] text-sm w-20">文本颜色</span>
        <el-color-picker v-model="m.style['--text-color']" />
      </div>
      <div class="flex flex-row flex-nowrap gap-6 items-center mt-4">
        <span class="text-nowrap text-[#666666] text-sm w-20">图标颜色</span>
        <el-color-picker v-model="m.style['--icon-color']" />
      </div>
    </Collapse>
  </div>
</template>
<script setup>
import Collapse from '@/components/Collapse.vue'
import { useBuilderStore } from '@/stores/builder.js'
import { storeToRefs } from 'pinia'
import ElInput from '@/components/ElInput'
import SearchBar from '../SearchBar/index.vue'

const builderStore = useBuilderStore()
const { currentComponent: m } = storeToRefs(builderStore)

const styleList = ['100px', '4px', '0px']
const getData = (val) => ({
  style: { '--border-radius': val },
  config: {
    placeholder: '请输入关键字进行搜索',
    showIcon: true
  }
})
const textAlignConfig = [
  { label: '居左', value: 'left' },
  { label: '居中', value: 'center' },
  { label: '居右', value: 'right' }
]
</script>
