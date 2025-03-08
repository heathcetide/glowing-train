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
        <text class="title">食 光 烙 记</text>
        <text class="subTitle">登录后记录绿色饮食</text>
      </view>

      <!-- 表单 -->
      <view class="logForm">
        <uni-forms ref="form" :modelValue="formData" :rules="rules" label-position="top" validate-trigger="submit">
          <uni-forms-item label="用户名/邮箱 " name="username" :label-width="200" required>
            <uni-easyinput type="text" v-model="formData.username" placeholder="用户名/邮箱" primary-color="#5DBE8A" />
          </uni-forms-item>
          <uni-forms-item label="密码" name="password" required>
            <uni-easyinput
              class="input"
              v-model="formData.password"
              primary-color="#5DBE8A"
              type="password"
              placeholder="请输入密码"
              clearable
              password-icon
            />
          </uni-forms-item>

          <uni-forms-item name="agree" required label="协议">
            <checkbox
              :checked="formData.agree"
              color="#5DBE8A "
              class="checkbox"
              activeBackgroundColor="#5DBE8A"
              activeBorderColor="#5DBE8A"
              @click="formData.agree = !formData.agree"
            />
            <text class="privacy"
              >我已阅读并同意<text class="privacy-text">《用户协议》《隐私政策》《儿童/青少年个人信息保护规则》</text>
            </text>
          </uni-forms-item>
        </uni-forms>
        <view class="login">
          <button @click="submit" class="btn">登录</button>
          <view class="otherWay">
            <view>
              <uni-icons type="left" color="#000" size="12" />
              其他登录方式
            </view>
            <view class="resign" @click="goToSeakPwd">
              <text>忘记密码</text>
            </view>
            <view class="resign" @click="goToResign">
              注册账号
              <uni-icons type="right" color="#000" size="12" />
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import Logo from '@/static/image/logo/logo.png'
import { ref } from 'vue'
import { onReady } from '@dcloudio/uni-app'
import { getUserInfoAndLevel, loginAPI } from '@/services/user/userBaseModule'
import { useMemberStore } from '@/stores/modules/member' // 导入 pinia store
import Utils from '@/utils'
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

const goToSeakPwd = () => {
  uni.navigateTo({
    url: '/pages/login/forget_pwd',
  })
}
const submit = () => {
  form.value
    .validate()
    .then(async (res: { username: string; password: string; agree: boolean }) => {
      // TODO 登录
      const result = await loginAPI({ username: res.username, password: res.password })
      const { data } = await getUserInfoAndLevel()

      if (result.code == 200) {
        const memberStore = useMemberStore()
        const { token } = result.data
        memberStore.setToken(token) // 保存令牌到 store
        memberStore.setProfile(data) // 保存用户信息
        console.log('Stored token:', memberStore.token)
        uni.switchTab({
          url: '/pages/mine/mine',
        })
      } else {
        Utils.showToast('登录失败')
      }
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
    url: '/pages/resign/regist_leader_one',
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
    font-size: 55.81rpx;
    line-height: 86.06rpx;
  }
  .subTitle {
    font-size: 20.93rpx;
    line-height: 32.27rpx;
    color: #000;
    font-weight: bold;
    letter-spacing: 5rpx;
  }

  .group {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15.7rpx;
  }

  .logForm {
    width: 663rpx;
    margin-top: 168rpx;

    .privacy {
      font-size: 17.5rpx;

      &-text {
        color: #2996f0;
      }
    }

    .login {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 10rpx;
      .otherWay {
        width: 100%;
        line-height: 30rpx;
        font-size: 20.93rpx;
        text-align: center;
        display: flex;
        justify-content: space-between;
      }
      .btn {
        width: 100%;
        margin-bottom: 40rpx;
        background-color: #5dbe8a;
        vertical-align: center;
        color: white;
      }
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
