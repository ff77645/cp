<template>
  <div
    class="absolute z-50 top-1 right-2 flex flex-row flex-nowrap items-center py-1 px-2 rounded"
    style="
      box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.16);
      background-color: rgba(255, 255, 255, 0.7);
    "
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
import { useBuilderStore } from '@/stores/builder.js'

const { deleteCurrentComponent, copyCurrentComponent } = useBuilderStore()

const onCopy = () => {
  console.log('EditPopover copy')
  copyCurrentComponent()
}
const onDelete = () => {
  console.log('EditPopover delete')
  deleteCurrentComponent()
}

onUnmounted(() => {
  console.log('EditPopover unmounted')
})
</script>
<style lang="scss">
.v-edit {
  box-sizing: border-box;
  position: relative;
  // border: 1px dashed transparent;
  // outline: none;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px dashed #bd8b46;
    z-index: 10;
  }
  // &:focus {
  // border-color: #bd8b46 !important;
  // outline-color: #bd8b46 !important;
  // }
}
</style>
