<template>
  <up-navbar safeAreaInsetTop>
    <template #left>
      <view class="u-nav-slot" @click="onClickLeft">
        <uni-icons type="arrow-left" color="#333333" size="24" />
      </view>
    </template>
    <template #center>
      <view class="u-nav-slot bg-#F5F5F5 py-14rpx px21rpx">
        <up-input placeholder="搜索食材或菜品" border="none" v-model="value" @confirm="handleSearch">
          <template #prefix>
            <uni-icons type="search" color="#999999" size="20" />
          </template>
        </up-input>
      </view>
    </template>
  </up-navbar>
</template>

<script setup lang="ts">
const value = defineModel<string>()
const onClickLeft = () => {
  console.log('sss')

  uni.navigateBack()
}

const handleSearch = () => {
  console.log(value.value)
  value.value = ''
}
</script>

<style scoped></style>
