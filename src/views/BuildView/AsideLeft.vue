<template>
  <div class="flex flex-col flex-nowrap">
    <!-- header -->
    <div class="p-4 bg-white">
      <el-radio-group v-model="radio1">
        <el-radio-button label="pages">页面</el-radio-button>
        <el-radio-button label="components">组件</el-radio-button>
        <el-radio-button label="templates">模板</el-radio-button>
        <el-radio-button label="materials">素材</el-radio-button>
      </el-radio-group>
    </div>
    <PageModule v-if="radio1 === 'pages'"></PageModule>
    <ComponentModule v-else-if="radio1 === 'components'"></ComponentModule>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import PageModule from './PageModule.vue'
import ComponentModule from './ComponentModule.vue'

const radio1 = ref('components')
</script>
