<template>
  <div class="">
    <div class="py-3 border-b border-[#D8D8D8] border-solid text-[#464C5B] font-bold text-lg">
      页面设置
    </div>
    <Collapse class="px-0 py-4" title="页面信息">
      <p class="text-[#666666] text-sm">文本内容</p>
      <div class="mt-3">
        <el-select v-model="configs.fontSize" class="w-20">
          <el-option
            v-for="item in fontSizeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-check-tag>B</el-check-tag>
      </div>
    </Collapse>
  </div>
</template>
<script setup>
import Collapse from '@/components/Collapse.vue'
import { reactive } from 'vue'

const configs = reactive({
  text: '文本内容',
  isEdit: false,
  config: {
    text: '文本内容',
    isEdit: false
  },
  fontSize: 12
})
const fontSize = [12, 14, 16, 18, 20]

const fontSizeOptions = fontSize.map((item) => ({
  label: item + 'px',
  value: item
}))
</script>
