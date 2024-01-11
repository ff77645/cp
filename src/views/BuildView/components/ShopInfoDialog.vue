<template>
  <el-dialog
    v-model="showShopInfo"
    @open="onOpen"
    append-to-body
    destroy-on-close
    align-center
    title="店铺信息"
  >
    <div class="overflow-y-auto" style="margin: -10px 0; max-height: calc(100vh - 200px)">
      <!-- 店铺信息 -->
      <div class="">
        <div class="text-[var(--el-color-primary)] text-[16px] title">店铺信息</div>
        <div class="pl-5">
          <div class="flex flex-row flex-nowrap items-center mt-4">
            <div class="required text-[#666666] text-sm">店铺名称：</div>
            <span class="text-[#464C5B] text-sm font-bold">秀才艺风格造型</span>
            <div class="text-sm text-[#999999]">（如需修改请联系售后）</div>
          </div>
          <div class="flex flex-row flex-nowrap items-center mt-4">
            <div class="text-[#666666] text-sm">店铺logo：</div>
            <el-image
              @click="clickShopLog"
              v-show="shopLog"
              style="width: 62px; height: 62px"
              class="object-cover rounded"
              :src="shopLog"
            ></el-image>
            <el-upload
              v-show="!shopLog"
              ref="uploadRef"
              :show-file-list="false"
              list-type="picture-card"
              :before-upload="beforeUpload"
              style="--upload-size: 62px"
            >
              <el-icon><Plus /></el-icon>
            </el-upload>
          </div>
        </div>
        <el-divider border-style="dashed"></el-divider>
        <div class="pl-5">
          <div class="flex flex-row flex-nowrap items-center">
            <div class="text-[#666666] text-sm">店铺图片：</div>
            <el-image
              class="w-16 h-16 object-cover rounded"
              src="http://pic.yupoo.com/isfy666/1a8ef780/0283a8b7.jpg"
            ></el-image>
          </div>
          <div class="flex flex-row flex-nowrap items-center mt-4">
            <div class="text-[#666666] text-sm">客服电话：</div>
            <el-input v-model="phoneNumber" class="!w-32"></el-input>
            <span class="text-sm text-[#999999] mx-3">(手机号)&nbsp;&nbsp;或</span>
            <el-input v-model="phoneNumber" class="!w-32"></el-input>
            <span class="text-sm text-[#999999] mx-3">(固定号码)</span>
          </div>
          <div class="flex flex-row flex-nowrap items-center mt-4">
            <div class="text-[#666666] text-sm whitespace-nowrap">店铺地址：</div>
            <el-cascader v-model="addres" :options="areaData" />
            <el-input v-model="phoneNumber" class="flex-1 mx-3"></el-input>
          </div>
          <div class="flex flex-row flex-nowrap items-start mt-4">
            <div class="text-[#666666] text-sm whitespace-nowrap">欢迎语言：</div>
            <el-input
              v-model="phoneNumber"
              :rows="4"
              type="textarea"
              show-word-limit
              maxlength="260"
              class="flex-1"
            ></el-input>
          </div>
        </div>
      </div>
      <el-divider></el-divider>
      <div class="">
        <div class="title text-[var(--el-color-primary)] text-[16px]">店铺负责人</div>
        <div class="pl-5">
          <div class="flex flex-row flex-nowrap items-center mt-4">
            <div class="required text-[#666666] text-sm">负责人姓名：</div>
            <el-input v-model="phoneNumber" class="!w-60"></el-input>
          </div>
          <div class="flex flex-row flex-nowrap items-center mt-4">
            <div class="required text-[#666666] text-sm">负责人电话：</div>
            <el-input v-model="phoneNumber" class="!w-60"></el-input>
            <div class="text-sm text-[#999999]">（如需修改请联系售后）</div>
          </div>
        </div>
      </div>
    </div>
    <template #footer>
      <el-button @click="showShopInfo = false">取消</el-button>
      <el-button type="primary">确认</el-button>
    </template>
  </el-dialog>
</template>
<script setup>
import { ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import { useAreaData } from '@/hooks'
import { fileToBase64 } from '@/utils'

const phoneNumber = ref('')
const addres = ref([])
const showShopInfo = ref(true)
const shopLog = ref('')
const uploadRef = ref(null)
const { areaData, loadData } = useAreaData()

const onOpen = () => {
  loadData()
}

const beforeUpload = async (file) => {
  const base64 = await fileToBase64(file)
  shopLog.value = base64
  return false
}
const clickShopLog = () => {
  console.log('clickShopLog', uploadRef.value)
  // uploadRef.value.submit()
}

defineExpose({
  show() {
    showShopInfo.value = true
  }
})
</script>
<style lang="scss" scoped>
.title {
  padding-left: 12px;
  position: relative;
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 2px;
    height: 24px;
    background-color: var(--el-color-primary);
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}

.required {
  position: relative;
  &::before {
    position: absolute;
    right: 100%;
    content: '*';
    color: #ff0000;
    padding-right: 4px;
  }
}
</style>
