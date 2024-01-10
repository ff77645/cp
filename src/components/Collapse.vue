<template>
  <div class="">
    <!-- title -->
    <div
      class="py-1 cursor-pointer text-lg flex flex-row flex-nowrap items-center text-[#464C5B]"
      @click="isOpen = !isOpen"
    >
      <el-icon v-show="isOpen" color="#BD8B46"><CaretBottom /></el-icon>
      <el-icon v-show="!isOpen" color="#BD8B46"><CaretRight /></el-icon>
      <span class="text-sm font-bold ml-2">
        {{ title }}
      </span>
    </div>
    <!-- content -->
    <el-collapse-transition>
      <div v-show="isOpen" class="py-4">
        <slot></slot>
      </div>
    </el-collapse-transition>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { CaretBottom, CaretRight } from '@element-plus/icons-vue'

const isOpen = ref(true)
defineProps({
  title: String
})
</script>
