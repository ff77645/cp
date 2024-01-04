<template>
  <div class="">
    <div class="py-3 border-b border-[#D8D8D8] border-solid text-[#464C5B] font-bold text-lg">
      图片
    </div>
    <Collapse class="px-0 py-4" title="图片设置">
      <p class="text-[#999999] text-xs mt-[-12px]">(图片宽度推荐375像素，高度自适应图片)</p>
      <el-upload
        class="avatar-uploader mt-3"
        :show-file-list="false"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="m.config.src" :src="m.config.src" class="avatar" />
        <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
      </el-upload>
      <div class="flex flex-row flex-nowrap gap-6 items-center mt-4">
        <span class="text-nowrap text-[#666666] text-sm">链接地址</span>
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
        <span class="text-nowrap text-[#666666] text-sm">圆角效果</span>
        <el-slider
          v-model="borderRadius"
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
import { computed } from 'vue'
import { useBuilderStore } from '@/stores/builder.js'
import { storeToRefs } from 'pinia'
import { Plus } from '@element-plus/icons-vue'

const builderStore = useBuilderStore()
const { currentComponent: m } = storeToRefs(builderStore)

console.log({ m })
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
const borderRadius = computed({
  get() {
    return parseInt(m.value.style.borderRadius)
  },
  set(val) {
    m.value.style.borderRadius = val + 'px'
  }
})

const beforeAvatarUpload = () => {}

const options = [
  {
    value: 'Option1',
    label: 'Option1'
  },
  {
    value: 'Option2',
    label: 'Option2'
  }
]
</script>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 88px;
  height: 88px;
  text-align: center;
}
</style>
