<template>
  <view class="profile-container">
    <CustomNavBar title="开启食光之旅" :step="1" :activeIndex="0" />
    <!-- 表单区域 -->
    <view class="form_area">
      <uni-forms @submit.prevent="handleSubmit" class="form" label-position="top">
        <uni-forms-item required label="邮箱">
          <uni-easyinput
            class="easy-input"
            prefixIcon="phone-filled"
            type="text"
            trim
            placeholder="请输入邮箱"
            v-model="userInfo.email"
            primary-color="#5DBE8A"
          ></uni-easyinput>
        </uni-forms-item>
        <uni-forms-item required label="验证码">
          <view class="code">
            <uni-easyinput
              class="easy-input"
              prefixIcon="email"
              type="text"
              trim
              placeholder="请输入验证码"
              v-model="userInfo.code"
              primary-color="#5DBE8A"
            ></uni-easyinput>
            <button class="btn" size="mini" @click="onGetCode">获取验证码</button>
          </view>
        </uni-forms-item>

        <uni-forms-item required label="协议" class="agree">
          <checkbox value="1" :checked="isAgree" @click="isAgree = !isAgree" class="checkbox" />
          我已阅读并同意 <text class="link">《用户协议》</text> 和 <text class="link">《隐私政策》</text>
        </uni-forms-item>

        <view class="button">
          <button class="edit-btn" @click="onNext">
            下一步 <uni-icons type="arrow-right" color="#fff" size="21" />
          </button>
          <view class="info"> 已有账号？ <text class="login" @click="goToLogin">立即登录</text> </view>
        </view>
      </uni-forms>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { User } from '@/types/user'
import { Reglex } from '@/utils/reglex'
import Utils from '@/utils'
import { emailVerificationCodeAPI, registerAPI } from '@/services/user/userBaseModule'
import CustomNavBar from './components/CustomNavBar.vue'
const { safeAreaInsets } = uni.getWindowInfo()

const isAgree = ref(false)
const userInfo = ref<User.EmailLoginParams>({
  email: '1176048215@qq.com',
  code: '',
})

const onGetCode = async () => {
  const res = await emailVerificationCodeAPI(userInfo.value.email)
  console.log(res)
}
const goToLogin = () => {
  Utils.redirectTo('/pages/login/login')
}
const checkValueIsEmpty = (value: string) => {
  return value !== '' ? true : false
}

/**
 * 验证用户输入
 * @param value 用户输入的值
 * @param type 验证类型
 * @returns
 */
const validate = (value: string, type: Reglex.ReglexType) => {
  if (!Reglex[type].test(value)) {
    Utils.showToast('error: ' + type)
    return false
  }
  return true
}
const handleSubmit = async () => {
  const res = Object.entries(userInfo.value).filter((a) => {
    return checkValueIsEmpty(a[1])
  })
  if (res.length < Object.entries(userInfo.value).length) {
    Utils.showToast('必填项不能为空')
    return
  }

  if (validate(userInfo.value.email, 'email')) {
    Utils.showToast('注册成功')
  }
  console.log(userInfo.value)
  // TODO 注册
  // const result = await registerAPI(userInfo.value)
  // console.log(result)
}

const onNext = () => {
  Utils.redirectTo('/pages/resign/regist_leader_three')
}
</script>

<style lang="scss" scoped>
.form_area {
  padding: 88rpx 32rpx;

  .checkbox {
    transform: scale(0.7);
  }
  .agree {
    font-weight: 400;
    font-size: 25rpx;
    color: #4b5563;
    line-height: 35rpx;
    .link {
      color: #5dbe8a;
    }
  }

  .code {
    display: flex;
    gap: 32rpx;
    button {
      display: flex;
      text-align: center;
      align-items: center;
      background-color: #5dbe8a10;
      color: #5dbe8a;
      // height: 80rpx;
    }
  }

  .button {
    margin-top: 262rpx;
    .edit-btn {
      background-color: #5dbe8a;
      font-weight: 500;
      font-size: 32rpx;
      color: #ffffff;
      line-height: 105rpx;
      border-radius: 8rpx;
      margin-bottom: 34rpx;
    }
    .info {
      font-weight: 400;
      font-size: 28rpx;
      color: #4b5563;
      line-height: 40rpx;
      text-align: center;
      .login {
        color: #5dbe8a;
      }
    }
  }
}
</style>
