<template>
  <div class="relative box-border p-4 bg-[var(--bg-color,#FFFFFF)]" :style="data.style">
    <div
      class="text-sm flex flex-row flex-nowrap bg-[var(--content-color,#FFFFFF)] items-center border border-[var(--border-color,#E6E6E6)] border-solid rounded-[var(--border-radius)] px-3 py-2 gap-2"
    >
      <el-icon v-if="data.config.showIcon" class="!text-[var(--icon-color,#999999)]" size="16px"
        ><Search
      /></el-icon>
      <input
        class="outline-none placeholder:text-[#999999] text-[var(--text-color,#999999)] bg-transparent flex-1"
        :style="{
          textAlign: 'var(--text-align,left)'
        }"
        :placeholder="data.config.placeholder"
        type="text"
        v-model="value"
        :readonly="isEdit"
      />
    </div>
  </div>
</template>
<script setup>
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'
defineProps({
  isEdit: {
    type: Boolean,
    default: false
  },
  data: {
    type: Object,
    default: () => ({})
  }
})
const value = ref('')
</script>
