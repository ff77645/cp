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
          class="flex flex-row flex-nowrap items-center justify-between box-border h-[40px] px-[10px] rounded border border-solid mt-3 cursor-pointer select-none"
          :class="
            page.uid === currentPage.uid
              ? 'text-[var(--el-color-primary)] border-[var(--el-color-primary)]'
              : 'border-[#E6E6E6] text-[#464C5B]'
          "
          @click.self="setPage(page)"
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
              <el-icon @click="setHome(page)" :color="page.uid === homeUid ? '#BD8B46' : '#999999'"
                ><House
              /></el-icon>
            </el-tooltip>
            <el-tooltip
              effect="dark"
              content="编辑"
              placement="bottom-start"
              :show-after="200"
              :hide-after="0"
            >
              <el-icon @click="setPageName(page)"><Edit /></el-icon>
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
                <el-icon><MoreFilled /></el-icon>
              </template>
              <ul class="flex flex-col gap-2">
                <li @click="copyPage(page)" class="cursor-pointer">复制</li>
                <li @click="deletePage(page)" class="cursor-pointer">删除</li>
                <li @click="saveAsTemplate(page)" class="cursor-pointer">存为模板</li>
              </ul>
            </el-popover>
          </div>
        </div>
      </div>
    </div>
    <!-- bottom -->
    <div class="px-4 py-3 flex-none" style="background-color: rgba(189, 139, 70, 0.05)">
      <el-button @click="saveAsTemplate(currentPage)" size="large" plain>存为模板</el-button>
      <el-button @click="addPage" size="large" type="primary">新增页面</el-button>
    </div>
  </div>
</template>
<script setup>
import { MoreFilled, Edit, House } from '@element-plus/icons-vue'
import { useBuilderStore } from '@/stores/builder.js'
import { storeToRefs } from 'pinia'
import Page from '@/model/Basic/Page'
import { ElMessage, ElMessageBox } from 'element-plus'
import { cloneDeep } from 'lodash-es'
import { toRaw } from 'vue'
import { shortid } from '@/utils/index'

const builderStore = useBuilderStore()
const { pageStack, currentPage, homeUid } = storeToRefs(builderStore)

const setCurrentPage = (page) => {
  builderStore.setCurrentPage(page)
}
const setHome = (page) => {
  ElMessageBox.confirm('请确认是否将当前页面设为首页?', '提示', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      homeUid.value = page.uid
    })
    .catch(() => {})
}
const addPage = () => {
  ElMessageBox.prompt('请输入页面名称', '新增页面', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    inputPlaceholder: '不超过10个字',
    inputValidator(value) {
      if (value.length > 10) return '最多10个字'
      return true
    }
  })
    .then((value) => {
      const page = new Page(value.value)
      pageStack.value.push(page)
      setCurrentPage(page)
      builderStore.setCurrentComponent(page)
    })
    .catch(() => {})
}

const deletePage = (page) => {
  if (pageStack.value.length === 1) return ElMessage.warning('至少保留一个页面')
  ElMessageBox.confirm(
    '请确认是否删除当前选中的页面，删除后不可恢复，需要重新创建，请谨慎操作.',
    '提示',
    {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning'
    }
  )
    .then(() => {
      pageStack.value.splice(pageStack.value.indexOf(page), 1)
      setCurrentPage(pageStack.value[0])
    })
    .catch(() => {})
}

const copyPage = (page) => {
  const clonePage = cloneDeep(toRaw(page))
  clonePage.uid = shortid()
  pageStack.value.push(clonePage)
}

const setPage = (page) => {
  setCurrentPage(page)
  builderStore.setCurrentComponent(page)
}

const setPageName = (page) => {
  ElMessageBox.prompt('请输入页面名称', '编辑页面', {
    inputValue: page.title,
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    inputPlaceholder: '不超过10个字',
    inputValidator(value) {
      if (value.length > 10) return '最多10个字'
      return true
    }
  })
    .then((value) => {
      page.title = value.value
    })
    .catch(() => {})
}

const saveAsTemplate = (page) => {
  ElMessageBox.confirm('请确认是否将当前页面/商城存为模板?', '提示', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      page = toRaw(page)
      console.log({ page })
    })
    .catch(() => {})
}
</script>
