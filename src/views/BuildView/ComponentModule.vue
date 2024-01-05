<template>
  <div class="flex-1 flex flex-col flex-nowrap overflow-auto bg-white">
    <Collapse title="基础组件" class="px-4">
      <div ref="dragRef" class="flex flex-row flex-wrap gap-4 select-none">
        <div
          v-for="(item, index) in basicComponent"
          :key="index"
          class="w-[68px] h-[68px] rounded-lg text-[#464C5B] flex flex-col flex-nowrap justify-center items-center gap-2 cursor-pointer hover:text-[#BD8B46] shadow-[#BD8B46] hover:shadow-md"
          :data-component="item.component"
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
import { createCompnent } from '@/model/index'
import { useBuilderStore } from '@/stores/builder.js'

const builderStore = useBuilderStore()

const basicComponent = [
  {
    name: '文本',
    icon: Memo,
    component: 'BaseText'
  },
  {
    name: '标题',
    icon: Memo,
    component: 'BaseTitle'
  },
  {
    name: '图片',
    icon: Memo,
    component: 'BaseImage'
  },
  {
    name: '轮播图',
    icon: Memo,
    component: 'Swiper'
  },
  {
    name: '拼图',
    icon: Memo,
    component: 'Puzzle'
  },
  {
    name: '视频x',
    icon: Memo,
    component: 'BaseVideo'
  },
  {
    name: '间隔x',
    icon: Memo,
    component: 'Space'
  },
  {
    name: '分割线x',
    icon: Memo,
    component: 'Divider'
  },
  {
    name: '项目x',
    icon: Memo,
    component: 'Project'
  },
  {
    name: '产品x',
    icon: Memo,
    component: 'Product'
  },
  {
    name: '搜索框x',
    icon: Memo,
    component: 'SearchBar'
  },
  {
    name: '图文导航x',
    icon: Memo,
    component: 'GraphicNavigator'
  },
  {
    name: '底部导航x',
    icon: Memo,
    component: 'TabBar'
  }
]

const dragRef = ref(null)
let currentUid = ''

useDraggable(dragRef, basicComponent, {
  animation: 150,
  group: { name: 'component', pull: 'clone', put: false },
  sort: false,
  clone(el) {
    const instance = createCompnent(el.component)
    console.log('添加:', el.component)
    currentUid = instance.uid
    return instance
  },
  onEnd() {
    const component = builderStore.currentPage.components.find((item) => item.uid === currentUid)
    if (!component) return
    builderStore.setCurrentComponent(component)
    // console.log('select', { component })
  }
})
</script>
