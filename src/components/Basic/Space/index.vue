<template>
  <div class="relative box-border" :style="data.style"></div>
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
