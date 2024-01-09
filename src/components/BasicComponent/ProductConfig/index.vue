<template>
  <div class="">
    <div class="py-3 border-b border-[#D8D8D8] border-solid text-[#464C5B] font-bold text-lg">
      项目
    </div>
    <Collapse class="px-0 py-4" title="项目设置">
      <div class="flex flex-row justify-between items-center">
        <span class="text-[#666666] text-sm">商品列表</span>
        <div>
          <el-button type="primary" plain>添加项目</el-button>
          <el-button type="primary" plain>添加产品</el-button>
        </div>
      </div>
      <p class="text-[#666666] text-sm mt-3">列表样式</p>
      <el-radio-group v-model="m.config.listType" class="mt-3">
        <el-radio v-for="item in listStyles" :key="item.value" :label="item.value">{{
          item.name
        }}</el-radio>
      </el-radio-group>
      <p class="text-[#666666] text-sm mt-3">显示内容</p>
      <el-checkbox-group v-model="m.config.contents" class="mt-3">
        <el-checkbox v-for="item in contentList" :key="item.value" :label="item.value">{{
          item.name
        }}</el-checkbox>
      </el-checkbox-group>
      <p class="text-[#666666] text-sm mt-3">商品角标</p>
      <el-radio-group v-model="m.config.markStyle" class="mt-3">
        <el-radio v-for="i in markStyleList" :key="i.value" :label="i.value">{{ i.name }}</el-radio>
      </el-radio-group>
    </Collapse>
    <Collapse class="" title="样式设置">
      <p class="text-[#666666] text-sm">商品样式</p>
      <el-radio-group v-model="m.config.productStyle" class="mt-3">
        <el-radio label="no-border">无边白底</el-radio>
        <el-radio label="has-border">描边白底</el-radio>
      </el-radio-group>
      <p class="text-[#666666] text-sm mt-3">商品倒角</p>
      <el-radio-group v-model="m.style['--border-radius']" class="mt-3">
        <el-radio label="0">直角</el-radio>
        <el-radio label="4px">圆角</el-radio>
      </el-radio-group>
      <p class="text-[#666666] text-sm mt-3">图片比例</p>
      <el-radio-group v-model="m.config.imgScale" class="mt-3">
        <el-radio v-for="i in scaleRadios" :key="i.value" :label="i.value">{{ i.name }}</el-radio>
      </el-radio-group>
      <p class="text-[#666666] text-sm mt-3">文本样式</p>
      <el-radio-group v-model="m.style['--font-weight']" class="mt-3">
        <el-radio label="400">常规体</el-radio>
        <el-radio label="600">加粗体</el-radio>
      </el-radio-group>
      <div class="flex flex-row justify-between items-center mt-3">
        <span class="text-[#666666] text-sm">文本位置</span>
        <el-radio-group v-model="m.style['--text-align']" size="large">
          <el-radio-button label="left">居左对齐</el-radio-button>
          <el-radio-button label="right">居右对齐</el-radio-button>
        </el-radio-group>
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
      <div class="flex flex-row flex-nowrap gap-6 items-center mt-4">
        <span class="text-nowrap text-[#666666] text-sm">内容间距</span>
        <el-slider
          v-model="contentSpace"
          :max="20"
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
// eslint-disable-next-line no-unused-vars
import ElInput from '@/components/ElInput'
import { computed } from 'vue'

const builderStore = useBuilderStore()
const { currentComponent: m } = storeToRefs(builderStore)

const paddingX = computed({
  get: () => parseInt(m.value.style['--padding-x']),
  set: (val) => (m.value.style['--padding-x'] = val + 'px')
})
const paddingY = computed({
  get: () => parseInt(m.value.style['--padding-y']),
  set: (val) => (m.value.style['--padding-y'] = val + 'px')
})
const contentSpace = computed({
  get: () => parseInt(m.value.style['--content-space']),
  set: (val) => (m.value.style['--content-space'] = val + 'px')
})
const scaleRadios = [
  {
    name: '3:2',
    value: 3 / 2
  },
  {
    name: '1:1',
    value: 1
  },
  {
    name: '3:4',
    value: 3 / 4
  },
  {
    name: '16:9',
    value: 16 / 9
  }
]
const contentList = [
  { name: '项目名称', value: 'name' },
  { name: '项目描述', value: 'desc' },
  { name: '项目价格', value: 'price' },
  { name: '购买按钮', value: 'button' },
  { name: '项目角标', value: 'mark' }
]
const listStyles = [
  {
    name: '大图模式',
    value: 'big-img'
  },
  {
    name: '详细列表',
    value: 'detail-list'
  },
  {
    name: '横向滑动',
    value: 'scroll-x'
  },
  {
    name: '一行两个',
    value: 'double-row'
  },
  {
    name: '一行三个',
    value: 'three-row'
  },
  {
    name: '一大两小',
    value: 't1-b2'
  }
]

const markStyleList = [
  {
    name: '样式一',
    value: 'hot2'
  },
  {
    name: '样式二',
    value: 'new'
  },
  {
    name: '样式三',
    value: 'hot'
  },
  {
    name: '样式四',
    value: 'new2'
  }
]
</script>
