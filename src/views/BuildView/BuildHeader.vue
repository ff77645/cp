<template>
  <header
    style="box-shadow: 0px 2px 8px 1px rgba(95, 95, 95, 0.08)"
    class="h-[56px] flex flex-row justify-between flex-none"
  >
    <!-- header-left -->
    <div class="flex flex-row items-center gap-4">
      <HeaderBack></HeaderBack>
      <FullScreen size="26"></FullScreen>
      <div class="text-[16px]">
        <span class="text-[#999999]">当前页面: </span>
        <span class="text-[#464C5B]"> {{ builderStore.currentPage.title }}</span>
      </div>
      <RecordAction></RecordAction>
    </div>
    <!-- header-right -->
    <div class="flex flex-row items-center pr-4">
      <el-button @click="shopInfoRef.show()" plain round>企宣</el-button>
      <el-button plain round>设置</el-button>
      <el-button plain round>主题色</el-button>
      <el-button plain round>预览</el-button>
      <el-button plain round>保存</el-button>
      <el-button type="primary" round>发布</el-button>
    </div>
  </header>
  <ShopInfoDialog ref="shopInfoRef"></ShopInfoDialog>
</template>
<script setup>
import FullScreen from '@/components/FullScreen.vue'
import HeaderBack from './components/HeaderBack.vue'
import RecordAction from './components/RecordAction.vue'
import { useBuilderStore } from '@/stores/builder.js'
import { ref } from 'vue'
import ShopInfoDialog from './components/ShopInfoDialog.vue'

const builderStore = useBuilderStore()
const shopInfoRef = ref(null)
</script>
