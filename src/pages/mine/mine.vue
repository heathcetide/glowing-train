<template>
  <UserInfo />
  <scroll-view scroll-y>
    <MySuccess />
    <MeanList />
  </scroll-view>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { getUserInfoAndLevel } from '@/services/user/userBaseModule'
import MeanList from './components/MeanList.vue'
import MySuccess from './components/MySuccess.vue'
import UserInfo from './components/UserInfo.vue'
import { useMemberStore } from '@/stores/modules/member' // 引入 Pinia store
// 使用 Pinia store
const memberStore = useMemberStore()

// 在页面加载时获取用户信息并存储到 Pinia
onMounted(async () => {
  try {
    const response = await getUserInfoAndLevel() // 假设这是获取用户信息的 API
    if (response.code === 200) {
      const profile = response.data // 获取 token 和 profile 信息
      // 保存用户信息到 Pinia store
      memberStore.setProfile(profile) // 设置用户信息
      console.log('Stored profile:', memberStore.profile)
    } else {
      console.error('获取用户信息失败:', response.message)
    }
  } catch (error) {
    console.error('请求错误:', error)
  }
})
</script>

<style lang="scss" scoped>
.container {
  height: calc(100vh - 120rpx);
  background-color: $uni-bg-color;
}

page {
  // background-color: #f3f4f6;
}
</style>
