<template>
  <div class="relative" :style="data.style">
    <div>
      <p v-if="!data.config.title && isEdit">点击编辑【标题】</p>
      <p v-else>{{ data.config.title }}</p>
    </div>
    <div class="mt-2">
      <div v-if="data.config.type === 'traditional'">
        {{ data.config.subtitle || '这里是副标题' }}
      </div>
      <div v-else class="flex flex-row flex-nowrap justify-between">
        <div>作者: {{ data.config.author }}</div>
        <div>{{ data.config.date }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  isEdit: {
    type: Boolean,
    default: false
  },
  data: {
    type: Object,
    default: () => ({})
  }
})
</script>
