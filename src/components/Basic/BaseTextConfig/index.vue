<template>
  <div class="">
    <div class="py-3 border-b border-[#D8D8D8] border-solid text-[#464C5B] font-bold text-lg">
      文本
    </div>
    <Collapse class="px-0 py-4" title="文本设置">
      <p class="text-[#666666] text-sm">文本内容</p>
      <div class="mt-3 flex gap-1">
        <el-select v-model="m.style.fontSize" class="w-20">
          <el-option
            v-for="item in fontSizeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-checkbox-group v-model="checkboxGroup1">
          <el-checkbox-button v-for="city in cities" :key="city" :label="city">
            {{ city }}
          </el-checkbox-button>
        </el-checkbox-group>
      </div>
      <el-input
        class="mt-3"
        v-model="m.config.text"
        :rows="3"
        type="textarea"
        placeholder="点击编辑文本"
        resize="none"
      />
    </Collapse>
    <Collapse class="" title="样式设置">
      <div class="flex flex-row flex-nowrap gap-6 items-center">
        <span class="text-nowrap text-[#666666] text-sm w-20">文本颜色</span>
        <el-color-picker v-model="m.style.color" />
      </div>
      <div class="flex flex-row flex-nowrap gap-6 items-center mt-4">
        <span class="text-nowrap text-[#666666] text-sm w-20">文本位置</span>
        <el-radio-group v-model="m.style.textAlign">
          <el-radio-button v-for="item in textAlignConfig" :key="item.value" :label="item.value">{{
            item.label
          }}</el-radio-button>
        </el-radio-group>
      </div>
      <div class="flex flex-row flex-nowrap gap-6 items-center mt-4">
        <span class="text-nowrap text-[#666666] text-sm w-20">文本框颜色</span>
        <el-color-picker v-model="m.style.borderColor" />
      </div>
      <div class="flex flex-row flex-nowrap gap-6 items-center mt-4">
        <span class="text-nowrap text-[#666666] text-sm w-20">背景颜色</span>
        <el-color-picker v-model="m.style.backgroundColor" />
      </div>
      <div class="flex flex-row flex-nowrap gap-6 items-center mt-4">
        <span class="text-nowrap text-[#666666] text-sm w-20">链接地址</span>
        <el-select v-model="m.config.linkUrl" class="m-2" placeholder="跳转链接">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </Collapse>
  </div>
</template>
<script setup>
import Collapse from '@/components/Collapse.vue'
import { ref } from 'vue'
import { useBuilderStore } from '@/stores/builder.js'
import { storeToRefs } from 'pinia'
import ElInput from '@/components/ElInput'

const builderStore = useBuilderStore()
const { currentComponent: m } = storeToRefs(builderStore)

const checkboxGroup1 = ref(['B'])
const cities = ['B', 'I', 'U', 'S']
const fontSize = [12, 14, 16, 18, 20]

const textAlignConfig = [
  { label: '左', value: 'left' },
  { label: '中', value: 'center' },
  { label: '右', value: 'right' }
]
const fontSizeOptions = fontSize.map((item) => ({
  label: item + 'px',
  value: item
}))

const options = [
  {
    value: 'Option1',
    label: 'Option1'
  },
  {
    value: 'Option2',
    label: 'Option2'
  },
  {
    value: 'Option3',
    label: 'Option3'
  },
  {
    value: 'Option4',
    label: 'Option4'
  },
  {
    value: 'Option5',
    label: 'Option5'
  }
]
</script>
