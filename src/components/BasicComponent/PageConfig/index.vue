<template>
  <div class="">
    <div class="py-3 border-b border-[#D8D8D8] border-solid text-[#464C5B] font-bold text-lg">
      页面设置
    </div>
    <Collapse class="py-4" title="页面信息">
      <div class="flex flex-row flex-nowrap gap-6 items-center">
        <span class="text-nowrap text-[#666666] text-sm">页面标题</span>
        <el-input v-model="currentPage.title"></el-input>
      </div>
      <div class="flex flex-row flex-nowrap gap-6 items-center mt-4">
        <span class="text-nowrap text-[#666666] text-sm">背景颜色</span>
        <el-color-picker v-model="currentPage.styles.backgroundColor" />
      </div>
      <div class="flex flex-row flex-nowrap gap-6 items-center mt-4">
        <span class="text-nowrap text-[#666666] text-sm">背景图片</span>
        <el-upload
          class="avatar-uploader"
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          :show-file-list="false"
          :before-upload="beforeAvatarUpload"
        >
          <img
            v-if="currentPage.styles.backgroundImage"
            :src="currentPage.styles.backgroundImage"
            class="avatar"
          />
          <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
      </div>
    </Collapse>
    <Collapse class="" title="分享信息">
      <span class="text-nowrap text-[#666666] text-sm">页面描述</span>
      <el-input
        class="mt-3"
        v-model="currentPage.shareInfo.description"
        :rows="5"
        type="textarea"
        resize="none"
        maxlength="200"
        show-word-limit
        placeholder="用户通过微信分享给朋友的时候，会自动显示页面描述"
      />
      <div class="flex flex-row flex-nowrap gap-6 items-center mt-4">
        <span class="text-nowrap text-[#666666] text-sm">背景图片</span>
        <el-upload
          class="avatar-uploader"
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          :show-file-list="false"
          :before-upload="beforeAvatarUpload"
        >
          <img
            v-if="currentPage.shareInfo.backgroundImage"
            :src="currentPage.shareInfo.backgroundImage"
            class="avatar"
          />
          <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
      </div>
    </Collapse>
  </div>
</template>
<script setup>
import Collapse from '@/components/Collapse.vue'
import { Plus } from '@element-plus/icons-vue'
import { useBuilderStore } from '@/stores/builder.js'
import { storeToRefs } from 'pinia'
import ElInput from '@/components/ElInput'

const { currentPage } = storeToRefs(useBuilderStore())
const beforeAvatarUpload = (file) => {
  console.log({ file })
}
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
