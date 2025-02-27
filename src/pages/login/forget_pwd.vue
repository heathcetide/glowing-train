<template>
  <view class="container" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
    <uni-nav-bar :border="false" @clickLeft="onClickLeft">
      <template #left>
        <uni-icons type="arrow-left" color="#000" size="24" />
      </template>
    </uni-nav-bar>
    <view class="wrap">
      <view class="logo">
        <image :src="Logo" mode="widthFix" class="image" />
      </view>
      <!-- 标题 -->
      <view class="group">
        <text class="title">忘记密码</text>
        <text class="subTitle">请输入您的注册邮箱或手机号我们会发送验证码帮助您重置</text>
      </view>

      <!-- 表单 -->
      <view>
        <uni-forms ref="form" :modelValue="formData" :rules="rules" validate-trigger="submit" class="logForm">
          <view class="form-item">
            <uni-easyinput
              prefixIcon="email-filled"
              :input-border="false"
              type="text"
              v-model="formData.username"
              placeholder="请输入手机号或邮箱"
              primary-color="#5DBE8A"
            />
          </view>
          <view class="form-item margin">
            <uni-easyinput
              prefixIcon="info-filled"
              :input-border="false"
              type="text"
              v-model="formData.username"
              placeholder="请输入验证码"
              primary-color="#5DBE8A"
            />
            <button class="msg">发送验证码</button>
          </view>
          <view class="form-item">
            <uni-easyinput
              prefixIcon="info-filled"
              :input-border="false"
              type="password"
              v-model="formData.username"
              placeholder="请输入新密码"
              primary-color="#5DBE8A"
            />
          </view>
        </uni-forms>

        <view class="btn">
          <button class="submit" @click="submit">重置密码</button>
          <view class="return" @click="onGoBack">返回登录</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import Logo from '@/static/image/logo/logo.png'
import { ref } from 'vue'
import { onReady } from '@dcloudio/uni-app'
import { loginAPI } from '@/services/user/userBaseModule'
const form = ref()
const { safeAreaInsets } = uni.getWindowInfo()

const formData = ref<{ username: string; password: string; agree: boolean }>({
  username: '',
  password: '',
  agree: false,
})

const rules: UniHelper.UniFormsRules = {
  username: {
    rules: [
      {
        required: true,
        errorMessage: '请输入邮箱或用户名',
      },
      {
        maxLength: 20,
        errorMessage: '姓名长度在 最大为 {maxLength} 个字符',
      },
    ],
  },

  password: {
    rules: [
      {
        required: true,
        errorMessage: '请输入正确的密码',
      },
    ],
  },
  agree: {
    rules: [
      {
        required: true,
        errorMessage: '请勾选用户协议',
      },
      {
        validateFunction: function (rule, value, data, callback) {
          if (!value) {
            return callback('请勾选用户协议')
          }
          return callback()
        },
      },
    ],
  },
}

const onGoBack = () => {
  uni.navigateBack()
}
const submit = () => {
  form.value
    .validate()
    .then(async (res: { username: string; password: string; agree: boolean }) => {
      // TODO 登录
      const result = await loginAPI({ username: res.username, password: res.password })
      console.log(result)
    })
    .catch((err: unknown) => {
      console.log('err', err)
    })
}
const onClickLeft = () => {
  uni.switchTab({
    url: '/pages/index/index',
  })
}

const goToResign = () => {
  uni.navigateTo({
    url: '/pages/resign/regist_index',
  })
}

onReady(() => {
  form.value.setRules(rules)
})
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
}

.wrap {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .title {
    font-weight: bold;
    letter-spacing: 10rpx;
    font-size: 72rpx !important;
    line-height: 86.06rpx;
    margin-top: 40rpx;
  }
  .subTitle {
    width: 11.9375rem;
    text-align: center;
    font-size: 24rpx;
    color: #6b7280;
    line-height: 32.27rpx;
    letter-spacing: 5rpx;
    font-weight: 350;
  }

  .group {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15.7rpx;
  }

  .logForm {
    width: 654rpx;
    margin-top: 118rpx;
    display: flex;
    flex-direction: column;
    gap: 48rpx;
    .form-item {
      border: 5rpx solid #e5e7eb;
      border-radius: 16rpx;
      padding: 10rpx 20rpx;
      font-size: 28rpx;
      display: flex;

      .msg {
        background-color: #5dbe8a;
        color: white;
        font-size: 24rpx;
        width: 178rpx;
      }
    }
    .margin {
      margin: 48rpx 0;
    }
  }

  .btn {
    margin-top: 96rpx;
    .submit {
      color: #ffffff;
      font-weight: 350;
      font-size: 32rpx;
      background-color: #5dbe8a;
    }
    .return {
      font-weight: 350;
      text-align: center;
      margin-top: 54rpx;
      color: #5dbe8a;
    }
  }
}
.pwdInput {
  display: flex;
  align-items: center;
  border: 2rpx solid #e5e5e5;
  border-radius: 10rpx;
}

.logo {
  margin-top: 32rpx;
  .image {
    width: 354.07rpx;
    height: 343.6rpx;
  }
}

.checkbox {
  transform: scale(0.6);
}
</style>
