<template>
  <div class="px-4">
    <!-- title -->
    <div
      class="py-1 cursor-pointer text-lg flex flex-row flex-nowrap items-center text-[#464C5B]"
      @click="isOpen = !isOpen"
    >
      <el-icon v-show="isOpen"><CaretBottom /></el-icon>
      <el-icon v-show="!isOpen"><CaretRight /></el-icon>
      <span class="text-sm font-bold ml-2">基础组件</span>
    </div>
    <!-- content -->
    <el-collapse-transition>
      <div v-show="isOpen" class="py-4 flex flex-row flex-wrap gap-4 select-none">
        <div
          v-for="i in 20"
          :key="i"
          class="w-[68px] h-[68px] rounded-lg text-[#464C5B] flex flex-col flex-nowrap justify-center items-center gap-2 cursor-pointer hover:text-[#BD8B46] shadow-[#BD8B46] hover:shadow-md"
        >
          <el-icon size="20px"><Memo /></el-icon>
          <span class="text-sm">文本{{ i }}</span>
        </div>
      </div>
    </el-collapse-transition>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { CaretBottom, CaretRight, Memo } from '@element-plus/icons-vue'

const isOpen = ref(false)
</script>
