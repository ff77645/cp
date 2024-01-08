<template>
  <div class="relative box-border">
    <!-- list -->
    <div class="px-4 overflow-hidden">
      <!-- item -->
      <div class="my-4">
        <img
          class="w-full object-cover rounded"
          v-scale="data.config.imgScale"
          src="http://pic.yupoo.com/isfy666/71fc9de3/281d760a.jpeg"
          alt=""
        />
        <!--  -->
        <div class="mt-3">
          <div class="text-[#333333] text-sm">项目名称</div>
          <div class="text-[#999999] text-xs mt-2 line-clamp-2 break-all">项目描述</div>
          <div class="flex flex-row flex-nowrap justify-between items-center mt-3">
            <div class="text-[#FF0000] text-sm">
              <span class="text-xs">￥</span>
              <span class="font-bold">99.99</span>
            </div>
            <div class="">
              <el-icon color="#FF0000" size="20px"><CirclePlus /></el-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { CirclePlus } from '@element-plus/icons-vue'

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
</script>
<style lang="scss" scoped></style>
