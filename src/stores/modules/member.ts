import type { User } from '@/types/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义 Store
export const useMemberStore = defineStore(
  'member',
  () => {
    // 会员信息
    const profile = ref<User.Info>()
    const token = ref<string | null>(null) // 保存 JWT 令牌

    // 保存会员信息，登录时使用
    const setProfile = (val: any) => {
      profile.value = val
    }

    // 保存 JWT 令牌
    const setToken = (val: string) => {
      token.value = val
    }

    // 清理会员信息，退出时使用
    const clearProfile = () => {
      profile.value = undefined
      token.value = null // 清除令牌
    }

    // 记得 return
    return {
      profile,
      setProfile,
      clearProfile,
      token,
      setToken,
      clearToken: () => {
        token.value = null
      },
    }
  },

  {
    // 配置持久化
    persist: {
      storage: {
        setItem(key, value) {
          uni.setStorageSync(key, value)
        },
        getItem(key) {
          return uni.getStorageSync(key)
        },
      },
    },
  },
)
