<template>
  <div class="relative box-border">
    <!-- list -->
    <div
      class="product-list"
      :class="[data.config.listType, data.config.productStyle, data.config.radius]"
      :style="data.style"
    >
      <!-- item -->
      <div v-for="i in 2" :key="i" class="product-item">
        <div class="relative img-wrap">
          <img
            class="pr-img"
            v-scale="data.config.imgScale"
            src="http://pic.yupoo.com/isfy666/71fc9de3/281d760a.jpeg"
            alt=""
          />
          <img
            v-if="isShow('mark')"
            class="absolute top-0 left-0 w-9"
            :src="markMap[data.config.markStyle]"
            alt="mark"
          />
        </div>
        <div v-if="isShowInfo" class="pr-info">
          <div>
            <div v-if="isShow('name')" class="pr-name">项目名称</div>
            <div v-if="isShow('desc')" class="pr-desc line-clamp-2 break-all">项目描述</div>
          </div>
          <div class="pr-action">
            <div v-if="isShow('price')" class="pr-price">
              <span class="text-xs">￥</span>
              <span class="font-bold">99.99</span>
            </div>
            <el-icon v-if="isShow('button')" color="#FF0000" size="20px"><CirclePlus /></el-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { CirclePlus } from '@element-plus/icons-vue'
import { computed } from 'vue'
import hot from './icons/hot.png'
import hot2 from './icons/hot2.png'
import new_icon from './icons/new.png'
import new2 from './icons/new2.png'

const markMap = { hot, hot2, new: new_icon, new2 }

const props = defineProps({
  isEdit: {
    type: Boolean,
    default: false
  },
  data: {
    type: Object,
    default: () => ({})
  }
})

const isShow = (flag) => props.data.config.contents.includes(flag)
const isShowInfo = computed(
  () => isShow('name') || isShow('desc') || isShow('price') || isShow('button')
)
</script>
<style lang="scss" scoped>
.product-list {
  padding: var(--padding-y, 12px) var(--padding-x, 12px);
  display: flex;
  flex-flow: column nowrap;
  gap: var(--content-space, 12px);
}
.product-item {
  .img-wrap {
    border-radius: var(--border-radius, 0);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    overflow: hidden;
  }
  .pr-img {
    width: 100%;
    object-fit: cover;
    border-radius: var(--border-radius, 0);
  }
  .pr-info {
    text-align: var(--text-align, left);
    padding: 10px;
  }
  .pr-name {
    font-size: 14px;
    color: #333333;
    font-weight: var(--font-weight, 400);
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
    margin-top: 8px;
  }
  .pr-price {
    color: #ff0000;
    font-size: 14px;
  }
}
.has-border {
  .pr-img {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .pr-info {
    border: 1px solid #e6e6e6;
    border-top: none;
    border-bottom-left-radius: var(--border-radius, 0);
    border-bottom-right-radius: var(--border-radius, 0);
  }
}

// 大图模式
// .big-img {

// }
// 详细列表
.detail-list {
  .product-item {
    margin: 0;
    display: flex;
    flex-flow: row nowrap;
    align-items: stretch;
    gap: 10px;
    padding: 10px;
    border-radius: var(--border-radius, 0);
  }
  .pr-img {
    width: 88px;
    border-radius: var(--border-radius, 0);
  }
  .pr-info {
    margin-top: 0;
    padding: 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    flex: 1;
    border: none;
  }
  &.has-border .product-item {
    border: 1px solid #e6e6e6;
  }
}
// 横向滚动
.scroll-x {
  flex-flow: row nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  .product-item {
    width: 120px;
    flex: none;
  }
}
// 一行两个
.double-row {
  flex-flow: row wrap;
  justify-content: space-between;
  .product-item {
    margin: 0;
    width: calc((100% - var(--content-space, 12px)) / 2);
  }
}
// 一行三个
.three-row {
  flex-flow: row wrap;
  .product-item {
    margin: 0;
    width: calc((100% - (var(--content-space, 12px) * 2)) / 3);
  }
}
.t1-b2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  .product-item:first-child {
    grid-column-start: 1;
    grid-column-end: 3;
  }
}
</style>
