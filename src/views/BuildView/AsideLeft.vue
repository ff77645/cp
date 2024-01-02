<template>
  <div class="flex flex-col flex-nowrap">
    <!-- header -->
    <div class="p-4 bg-white">
      <el-radio-group v-model="component">
        <el-radio-button label="pages">页面</el-radio-button>
        <el-radio-button label="components">组件</el-radio-button>
        <el-radio-button label="templates">模板</el-radio-button>
        <el-radio-button label="materials">素材</el-radio-button>
      </el-radio-group>
    </div>
    <PageModule v-if="component === 'pages'"></PageModule>
    <ComponentModule v-else-if="component === 'components'"></ComponentModule>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import PageModule from './PageModule.vue'
import ComponentModule from './ComponentModule.vue'

const component = ref('components')
</script>
