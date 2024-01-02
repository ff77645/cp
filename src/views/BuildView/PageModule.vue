<template>
  <div class="flex-1 flex flex-col flex-nowrap overflow-hidden">
    <!-- top -->
    <div class="px-4 bg-white flex-1 flex flex-col flex-nowrap overflow-hidden">
      <div
        class="pt-1 pb-4 text-[#464C5B] font-bold text-[16px] border-solid border-[#D8D8D8] border-b"
      >
        页面管理（{{ pageStack.length }}）
      </div>
      <div class="flex-1 overflow-auto py-1">
        <div
          v-for="page in pageStack"
          :key="page.uid"
          class="flex flex-row flex-nowrap items-center justify-between box-border h-[40px] px-[10px] rounded border border-[#E6E6E6] border-solid mt-3 cursor-pointer select-none text-[#464C5B]"
          :class="
            page.uid === currentPage.uid
              ? 'text-[var(--el-color-primary)] border-[var(--el-color-primary)]'
              : ''
          "
          @click.self="setCurrentPage(page)"
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
              <el-icon><House /></el-icon>
            </el-tooltip>
            <el-tooltip
              effect="dark"
              content="编辑"
              placement="bottom-start"
              :show-after="200"
              :hide-after="0"
            >
              <el-icon><Edit /></el-icon>
            </el-tooltip>
            <el-popover
              placement="bottom-start"
              popper-style="min-width: 90px"
              :width="90"
              effect="dark"
              trigger="click"
              :hide-after="0"
            >
              <template #reference>
                <el-icon><MoreFilled /></el-icon>
              </template>
              <ul class="flex flex-col gap-2">
                <li class="cursor-pointer">复制</li>
                <li @click="deletePage(page)" class="cursor-pointer">删除</li>
                <li class="cursor-pointer">存为模板</li>
              </ul>
            </el-popover>
          </div>
        </div>
      </div>
    </div>
    <!-- bottom -->
    <div class="px-4 py-3 flex-none" style="background-color: rgba(189, 139, 70, 0.05)">
      <el-button size="large" plain>存为模板</el-button>
      <el-button @click="addPage" size="large" type="primary">新增页面</el-button>
    </div>
  </div>
</template>
<script setup>
import { MoreFilled, Edit, House } from '@element-plus/icons-vue'
import { useBuilderStore } from '@/stores/builder.js'
import { PageScheme } from '@/schema/pageScheme.js'
import { storeToRefs } from 'pinia'
const { pageStack, currentPage, currentComponent } = storeToRefs(useBuilderStore())

const addPage = () => {
  const page = new PageScheme('页面' + pageStack.value.length)
  page.uid = pageStack.value.length
  pageStack.value.push(page)
  currentPage.value = page
  currentComponent.value = page
}

const deletePage = (page) => {
  pageStack.value.splice(pageStack.value.indexOf(page), 1)
  currentPage.value = {}
  currentComponent.value = {}
}

const setCurrentPage = (page) => {
  currentPage.value = page
  currentComponent.value = page
}
addPage()
</script>
