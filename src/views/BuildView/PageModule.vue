<template>
  <div class="flex-1 flex flex-col flex-nowrap overflow-hidden">
    <!-- top -->
    <div class="px-4 bg-white flex-1 flex flex-col flex-nowrap overflow-hidden">
      <div
        class="pt-1 pb-4 text-[#464C5B] font-bold text-[16px] border-solid border-[#D8D8D8] border-b"
      >
        页面管理（8）
      </div>
      <div class="flex-1 overflow-auto py-1">
        <div
          v-for="i in 20"
          :key="i"
          class="flex flex-row flex-nowrap items-center justify-between box-border h-[40px] px-[10px] rounded border border-[#E6E6E6] border-solid mt-3 cursor-pointer select-none"
        >
          <div class="pl-[6px] text-[#464C5B]">首页</div>
          <div class="flex flex-row flex-nowrap gap-4 text-xl text-[#999999]">
            <el-icon><House /></el-icon>
            <el-icon><Edit /></el-icon>
            <el-icon><MoreFilled /></el-icon>
          </div>
        </div>
      </div>
    </div>
    <!-- bottom -->
    <div class="px-4 py-3 flex-none" style="background-color: rgba(189, 139, 70, 0.05)">
      <el-button size="large" plain>存为模板</el-button>
      <el-button size="large" type="primary">新增页面</el-button>
    </div>
  </div>
</template>
<script setup>
import { MoreFilled, Edit, House } from '@element-plus/icons-vue'
</script>
