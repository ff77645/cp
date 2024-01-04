<template>
  <div class="cursor-pointer relative box-border" :style="data.style">
    <img
      :style="{ borderRadius: data.style.borderRadius }"
      class="w-full"
      :src="data.config.src"
      loading="lazy"
    />
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
