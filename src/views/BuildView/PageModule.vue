<template>
  <div class="flex-1 flex flex-col flex-nowrap overflow-hidden">
    <!-- top -->
    <div class="px-4 bg-white flex-1 flex flex-col flex-nowrap overflow-hidden">
      <div
        class="pt-1 pb-4 text-[#464C5B] font-bold text-[16px] border-solid border-[#D8D8D8] border-b"
      >
        页面管理（{{ pageStack.length }}）
      </div>
      <div ref="sortableRef" class="flex-1 overflow-auto py-1 relative">
        <TransitionGroup type="transition" name="fade">
          <PageItem
            v-for="page in pageStack"
            :isChecked="page.uid === currentPage.uid"
            :isHome="page.uid === homeUid"
            :key="page.uid"
            :page="page"
            @setPage="setPage"
            @setHome="setHome"
            @setPageName="setPageName"
            @copyPage="copyPage"
            @deletePage="deletePage"
            @saveAsTemplate="saveAsTemplate"
          ></PageItem>
        </TransitionGroup>
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
import { useBuilderStore } from '@/stores/builder.js'
import { storeToRefs } from 'pinia'
import Page from '@/model/Basic/Page'
import { ElMessage, ElMessageBox } from 'element-plus'
import { cloneDeep } from 'lodash-es'
import { toRaw, ref } from 'vue'
import { shortid } from '@/utils/index'
import PageItem from './components/PageItem.vue'
import { useDraggable } from 'vue-draggable-plus'

const sortableRef = ref(null)
const builderStore = useBuilderStore()
const { pageStack, currentPage, homeUid } = storeToRefs(builderStore)

useDraggable(sortableRef, pageStack, {
  animation: 150,
  direction: 'vertical'
})

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
      if (!value) return '页面名称不能为空'
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
      if (!value) return '页面名称不能为空'
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
<style>
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

.fade-leave-active {
  position: absolute;
}
</style>
