<template>
  <view class="profile-container">
    <CustomNavBar title="开启食光之旅" :step="1" :activeIndex="0" />
    <!-- 表单区域 -->
    <view class="form_area">
      <uni-forms class="form" label-position="top">
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
            <button
              :class="{ 'bg-#5dbe8a10 text-#cccc': isAdmitCode }"
              :disabled="isAdmitCode"
              class="bg-#5dbe8a10 text-#5DBE8A"
              size="mini"
              @click="onGetCode"
            >
              {{ textCode }}
              <up-count-down
                ref="countDown"
                v-show="showCodeCountDown"
                @change="handleCountChange"
                @finish="handleFinish"
                :auto-start="false"
                :time="60 * 1000"
                format="ss"
              ></up-count-down>
            </button>
          </view>
        </uni-forms-item>

        <uni-forms-item required label="协议" class="agree">
          <checkbox color="#5dbe8a" value="1" :checked="isAgree" @click="isAgree = !isAgree" class="checkbox" />
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
import { computed, ref } from 'vue'
import type { User } from '@/types/user'
import { Reglex } from '@/utils/reglex'
import Utils from '@/utils'
import { emailVerificationCodeAPI, registerAPI, registerByEmailAPI } from '@/services/user/userBaseModule'
import CustomNavBar from './components/CustomNavBar.vue'
import { onLoad } from '@dcloudio/uni-app'

import { useMemberStore } from '@/stores'
const memberStore = useMemberStore()

const showCodeCountDown = ref(false)
const textCode = ref('获取验证码')
const countDown = ref()

const isAgree = ref(false)
const userInfo = ref<User.EmailLoginParams>({
  email: '',
  code: '',
})

const isAdmitCode = computed<boolean>(() => {
  return userInfo.value.email === '' ? true : false
})

const handleFinish = () => {
  textCode.value = '重新获取'
  countDown.value.reset()
  showCodeCountDown.value = false
}

const handleCountChange = (e: any) => {
  // textCode.value = `${e.seconds}s`
}

const onGetCode = async () => {
  if (!validate(userInfo.value.email, 'email')) {
    Utils.showToast('请输入正确的邮箱格式')
    return
  }

  try {
    const res = await emailVerificationCodeAPI(userInfo.value.email)
    if (res.code === 200) {
      Utils.showToast('验证码发送成功')

      countDown.value.start()
      textCode.value = '验证码获取中'

      showCodeCountDown.value = true
    } else {
      Utils.showToast('验证码发送失败')
    }
  } catch (error: any) {
    Utils.navigateTo('/pages/message/fail?msg=' + error.errMsg)
  }
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
    return false
  }
  return true
}

const handleCheck = () => {
  if (!userInfo.value.email || !userInfo.value.code) {
    Utils.showToast('必填项不能为空')
    return false
  }

  if (!validate(userInfo.value.email, 'email')) {
    Utils.showToast('请输入正确的邮箱格式')
    return false
  }

  if (!isAgree.value) {
    Utils.showToast('请先阅读并同意用户协议和隐私政策')
    return false
  }

  return true
}

const onNext = async () => {
  if (!handleCheck()) return

  try {
    const result = await registerByEmailAPI(userInfo.value)

    if (result.code === 200) {
      memberStore.setProfile(result.data)
      memberStore.setToken(result.data?.token as string)
      Utils.redirectTo('/pages/resign/regist_leader_three')
    } else {
      Utils.showToast(result.code === 300 ? '注册失败:' + result.message : (result?.data as string))
    }
  } catch (error: any) {
    Utils.showToast('注册失败:' + error.errMsg)
  }
}

onLoad(() => {
  textCode.value = '获取验证码'
})
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
