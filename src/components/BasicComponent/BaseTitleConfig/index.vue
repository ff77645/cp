<template>
  <div class="">
    <div class="py-3 border-b border-[#D8D8D8] border-solid text-[#464C5B] font-bold text-lg">
      标题
    </div>
    <Collapse class="px-0 py-4" title="标题设置">
      <p class="text-[#666666] text-sm">标题内容</p>
      <el-input
        class="mt-3"
        v-model="m.config.title"
        :rows="3"
        type="textarea"
        placeholder="点击编辑【标题】"
        resize="none"
      />
      <p class="text-[#666666] text-sm mt-4">标题类型</p>
      <el-radio-group v-model="m.config.type" class="mt-2">
        <el-radio label="traditional">传统样式</el-radio>
        <el-radio label="wechat">微信样式</el-radio>
      </el-radio-group>
      <template v-if="m.config.type === 'traditional'">
        <p class="text-[#666666] text-sm mt-3">副标题</p>
        <el-input
          class="mt-3"
          v-model="m.config.subtitle"
          :rows="3"
          type="textarea"
          placeholder="请输入文本内容"
          resize="none"
        />
      </template>
      <template v-else>
        <p class="text-[#666666] text-sm mt-3">日期</p>
        <el-date-picker
          v-model="m.config.date"
          value-format="YYYY-MM-DD"
          type="date"
          placeholder="年/月/日"
          class="mt-3"
        />
        <p class="text-[#666666] text-sm mt-3">作者</p>
        <el-input v-model="m.config.author" class="mt-3 ![--el-input-width:220px]"></el-input>
      </template>
    </Collapse>
    <Collapse class="" title="样式设置">
      <div class="flex flex-row flex-nowrap gap-6 items-center">
        <span class="text-nowrap text-[#666666] text-sm w-20">背景颜色</span>
        <el-color-picker v-model="m.style.backgroundColor" />
      </div>
      <div class="flex flex-row flex-nowrap gap-6 items-center mt-4">
        <span class="text-nowrap text-[#666666] text-sm w-20">显示位置</span>
        <el-radio-group v-model="m.style.textAlign">
          <el-radio-button v-for="item in textAlignConfig" :key="item.value" :label="item.value">{{
            item.label
          }}</el-radio-button>
        </el-radio-group>
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
      <div class="flex flex-row flex-nowrap gap-6 items-center mt-4">
        <span class="text-nowrap text-[#666666] text-sm w-20">字号大小</span>
        <el-select v-model="m.style.fontSize" class="w-20">
          <el-option
            v-for="item in fontSizeOptions"
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
import { useBuilderStore } from '@/stores/builder.js'
import { storeToRefs } from 'pinia'

const builderStore = useBuilderStore()
const { currentComponent: m } = storeToRefs(builderStore)

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
