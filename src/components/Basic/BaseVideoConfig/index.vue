<template>
  <div class="">
    <div class="py-3 border-b border-[#D8D8D8] border-solid text-[#464C5B] font-bold text-lg">
      视频
    </div>
    <Collapse class="px-0 py-4" title="视频设置">
      <div class="flex flex-row flex-nowrap justify-between gap-6 items-center">
        <span class="text-nowrap text-[#666666] text-sm">视频来源</span>
        <el-radio-group v-model="m.config.sourceType">
          <el-radio-button label="library">视频库</el-radio-button>
          <el-radio-button label="link">视频地址</el-radio-button>
        </el-radio-group>
      </div>
      <template v-if="m.config.sourceType === 'library'">
        <div class="mt-3">
          <span class="text-[#666666] mr-2">添加视频</span>
          <span class="text-[#999999] text-xs">(建议视频高度比为16:9)</span>
        </div>
        <el-upload class="avatar-uploader mt-3" :show-file-list="false">
          <img v-if="m.config.poster" :poster="m.config.src" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
      </template>
      <template v-else>
        <div class="mt-3">
          <span class="text-[#666666] mr-2">视频地址</span>
          <span class="text-[#999999] text-xs">(仅支持.mp4格式的视频源地址)</span>
        </div>
        <el-input
          class="mt-3"
          v-model="m.config.src"
          :rows="3"
          type="textarea"
          placeholder="请添加视频地址到这里"
          resize="none"
        />
      </template>
      <div class="mt-3">
        <span class="text-[#666666] mr-2">视频封面</span>
        <span class="text-[#999999] text-xs">(建议图片尺寸为1200*675像素)</span>
      </div>
      <el-upload class="avatar-uploader mt-3" :show-file-list="false">
        <img v-if="m.config.poster" :poster="m.config.src" class="avatar" />
        <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
      </el-upload>
      <div class="flex flex-row flex-nowrap justify-between gap-6 items-center mt-4">
        <span class="text-nowrap text-[#666666] text-sm">播放规则</span>
        <el-radio-group v-model="m.config.autoplay">
          <el-radio-button :label="true">自动播放</el-radio-button>
          <el-radio-button :label="false">点击播放</el-radio-button>
        </el-radio-group>
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
    </Collapse>
  </div>
</template>
<script setup>
import Collapse from '@/components/Collapse.vue'
import { useBuilderStore } from '@/stores/builder.js'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
// eslint-disable-next-line no-unused-vars
import ElInput from '@/components/ElInput'
import { Plus } from '@element-plus/icons-vue'

const builderStore = useBuilderStore()
// eslint-disable-next-line no-unused-vars
const { currentComponent: m } = storeToRefs(builderStore)
const fontSize = [12, 14, 16, 18, 20]

// eslint-disable-next-line no-unused-vars
const textAlignConfig = [
  { label: '左', value: 'left' },
  { label: '中', value: 'center' },
  { label: '右', value: 'right' }
]
// eslint-disable-next-line no-unused-vars
const fontSizeOptions = fontSize.map((item) => ({
  label: item + 'px',
  value: item
}))

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
</script>
