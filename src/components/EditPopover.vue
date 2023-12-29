<template>
  <div
    class="absolute top-1 right-2 flex flex-row flex-nowrap items-center py-1 px-2 rounded"
    style="box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.16)"
    @click.stop
  >
    <el-icon @click="onCopy" size="18px" color="#BD8B46"><CopyDocument /></el-icon>
    <el-divider direction="vertical" />
    <el-icon @click="onDelete" size="18px" color="#464C5B"><Delete /></el-icon>
  </div>
</template>
<script setup>
import { CopyDocument, Delete } from '@element-plus/icons-vue'
import { onUnmounted } from 'vue'

defineOptions({
  name: 'EditPopover'
})

const onCopy = () => {
  console.log('EditPopover copy')
}
const onDelete = () => {
  console.log('EditPopover delete')
}

onUnmounted(() => {
  console.log('EditPopover unmounted')
})
</script>
<style lang="scss">
.v-edit {
  box-sizing: border-box;
  position: relative;
  border: 1px dashed transparent;
  &:focus {
    border-color: #bd8b46;
  }
}
</style>
