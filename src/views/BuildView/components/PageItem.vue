<template>
  <div
    class="flex flex-row flex-nowrap items-center justify-between box-border h-[40px] px-[10px] rounded border border-solid mt-3 cursor-pointer select-none"
    :class="
      isChecked
        ? 'text-[var(--el-color-primary)] border-[var(--el-color-primary)]'
        : 'border-[#E6E6E6] text-[#464C5B]'
    "
    @click.self="emit('setPage', page)"
  >
    <div class="pl-[6px]">{{ page.title }}</div>
    <div class="flex flex-row flex-nowrap gap-4 text-xl text-[#999999]">
      <el-tooltip
        effect="dark"
        content="设为首页"
        placement="bottom-start"
        :show-after="200"
        :hide-after="0"
      >
        <el-icon @click="emit('setHome', page)" :color="isHome ? '#BD8B46' : '#999999'">
          <House />
        </el-icon>
      </el-tooltip>
      <el-tooltip
        effect="dark"
        content="编辑"
        placement="bottom-start"
        :show-after="200"
        :hide-after="0"
      >
        <el-icon @click="emit('setPageName', page)">
          <Edit />
        </el-icon>
      </el-tooltip>
      <el-popover
        placement="bottom-start"
        popper-style="min-width: 90px"
        :width="90"
        effect="dark"
        :show-after="200"
        :hide-after="100"
      >
        <template #reference>
          <el-icon>
            <MoreFilled />
          </el-icon>
        </template>
        <ul class="flex flex-col gap-2">
          <li @click="emit('copyPage', page)" class="cursor-pointer">复制</li>
          <li @click="emit('deletePage', page)" class="cursor-pointer">删除</li>
          <li @click="emit('saveAsTemplate', page)" class="cursor-pointer">存为模板</li>
        </ul>
      </el-popover>
    </div>
  </div>
</template>

<script setup>
import { MoreFilled, Edit, House } from '@element-plus/icons-vue'
defineProps({
  page: Object,
  isChecked: Boolean,
  isHome: Boolean
})

const emit = defineEmits([
  'setPage',
  'setHome',
  'setPageName',
  'copyPage',
  'deletePage',
  'saveAsTemplate'
])
</script>
