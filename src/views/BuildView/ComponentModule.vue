<template>
  <div class="flex-1 flex flex-col flex-nowrap overflow-auto bg-white">
    <Collapse title="基础组件" class="px-4">
      <div ref="dragRef" class="flex flex-row flex-wrap gap-4 select-none">
        <div
          v-for="(item, index) in basicComponent"
          :key="index"
          class="w-[68px] h-[68px] rounded-lg text-[#464C5B] flex flex-col flex-nowrap justify-center items-center gap-2 cursor-pointer hover:text-[#BD8B46] shadow-[#BD8B46] hover:shadow-md"
        >
          <el-icon size="20px"><Memo /></el-icon>
          <span class="text-sm">{{ item.name }}</span>
        </div>
      </div>
    </Collapse>
  </div>
</template>
<script setup>
import Collapse from '@/components/Collapse.vue'
import { Memo } from '@element-plus/icons-vue'
import { useDraggable } from 'vue-draggable-plus'
import { ref } from 'vue'

const basicComponent = [
  {
    name: '文本',
    icon: Memo
  }
]

const dragRef = ref(null)

useDraggable(dragRef, basicComponent, {
  animation: 150
})
</script>
