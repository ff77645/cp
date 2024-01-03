<template>
  <div class="cursor-pointer edit relative" :style="data.style">
    <p v-if="!data.config.text && isEdit">点击编辑文本</p>
    <p v-else>{{ data.config.text }}</p>
  </div>
</template>
<script setup>
defineProps({
  isEdit: {
    type: Boolean,
    default: false
  },
  config: {
    type: Object,
    default: () => ({})
  },
  style: {
    type: Object,
    default: () => ({})
  },
  data: {
    type: Object,
    default: () => ({})
  }
})
</script>
