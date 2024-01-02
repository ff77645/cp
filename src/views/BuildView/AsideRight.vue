<template>
  <div class="bg-white p-4">
    <PageConfig v-if="currentComponent && currentComponent.type === 'page'"></PageConfig>
  </div>
</template>
<script setup>
import PageConfig from '@/components/BasicComponent/PageConfig/index.vue'
import { useBuilderStore } from '@/stores/builder.js'
import { storeToRefs } from 'pinia'

const { currentComponent } = storeToRefs(useBuilderStore())
</script>
