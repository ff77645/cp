<template>
  <div class="relative box-border">
    <!-- list -->
    <div :class="data.config.listType">
      <!-- item -->
      <div v-for="i in 3" :key="i" class="product-item">
        <img
          class="pr-img"
          v-scale="data.config.imgScale"
          src="http://pic.yupoo.com/isfy666/71fc9de3/281d760a.jpeg"
          alt=""
        />
        <!--  -->
        <div class="pr-info">
          <div>
            <div class="pr-name">项目名称</div>
            <div class="pr-desc line-clamp-2 break-all">项目描述</div>
          </div>
          <div class="pr-action">
            <div class="pr-price">
              <span class="text-xs">￥</span>
              <span class="font-bold">99.99</span>
            </div>
            <el-icon color="#FF0000" size="20px"><CirclePlus /></el-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { CirclePlus } from '@element-plus/icons-vue'

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
<style lang="scss" scoped>
.product-item {
  margin: 12px 0;
  .pr-img {
    width: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
  .pr-info {
    padding-top: 10px;
  }
  .pr-name {
    font-size: 14px;
    color: #333333;
  }
  .pr-desc {
    color: #999999;
    font-size: 12px;
    margin-top: 8px;
  }
  .pr-action {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;
  }
  .pr-price {
    color: #ff0000;
    font-size: 14px;
  }
}
// 大图模式
.big-img {
  padding: 0 16px;
  overflow: hidden;
}
// 详细列表
.detail-list {
  .product-item {
    display: flex;
    flex-flow: row nowrap;
    align-items: stretch;
    gap: 10px;
    padding: 10px;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
  }
  .pr-img {
    width: 88px;
  }
  .pr-info {
    margin-top: 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    flex: 1;
  }
}
// 横向滚动
.scroll-x {
  padding: 0 16px;
  display: flex;
  flex-flow: row nowrap;
  overflow-x: scroll;
  gap: 12px;
  .pr-info {
    width: 123px;
  }
}
// 一行两个
.double-row {
  display: flex;
  flex-flow: row wrap;
  gap: 12px;
  padding: 12px;
  justify-content: space-between;
  .product-item {
    margin: 0;
    width: calc((100% - 12px) / 2);
  }
}
// 一行三个
.three-row {
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
  padding: 12px;
  .product-item {
    margin: 0;
    width: calc((100% - 20px) / 3);
  }
  .pr-action {
  }
}
</style>
