<template>
  <view class="container">
    <CustomNavBar title="完善个人信息" :step="2" :activeIndex="1" />

    <view class="content">
      <CustomCard title="性别">
        <template #default>
          <view class="wrap">
            <uni-row class="sex" :gutter="20">
              <uni-col :span="8" v-for="(item, index) in sex" :key="item.text">
                <view class="item" @click="activeIndex = index" :class="{ active: activeIndex === index }">
                  <image class="icon" :src="item.icon" mode="scaleToFill" />
                  <text>{{ item.text }}</text>
                </view>
              </uni-col>
            </uni-row>
          </view>
        </template>
      </CustomCard>
      <CustomCard title="出生日期">
        <template #default>
          <view class="wrap">
            <uni-datetime-picker
              type="date"
              @change="onChange!"
              :clear-icon="false"
              v-model="birthday"
              @maskClick="maskClick"
            />
          </view>
        </template>
      </CustomCard>
      <CustomCard title="身高(cm)">
        <template #default>
          <view class="wrap">
            <view>
              <text class="title"></text>
            </view>
            <view class="select">
              <uni-easyinput v-model="height" type="text" placeholder="请输入身高" @confirm="onChangeHeight!" />
            </view>
          </view>
        </template>
      </CustomCard>
      <CustomCard title="健康目标">
        <template #default>
          <view class="wrap">
            <uni-row class="healthy-target" :gutter="20">
              <uni-col :span="12" v-for="(item, index) in healthyTarget" :key="item.text">
                <view
                  class="item"
                  :class="{ active: index === currentTargetIndex }"
                  @click="currentTargetIndex = index"
                >
                  <image class="healthy-icon" :src="item.icon" mode="scaleToFill" />
                  <text class="healthy-text">{{ item.text }}</text>
                </view>
              </uni-col>
            </uni-row>
          </view>
        </template>
      </CustomCard>
    </view>

    <CustomButton url="/pages/resign/regist_leader_four" />
  </view>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import CustomNavBar from './components/CustomNavBar.vue'
import CustomButton from './components/CustomButton.vue'

import ManIcon from '@/static/image/regist/man.svg'
import FemaleIcon from '@/static/image/regist/female.svg'
import UnkownIcon from '@/static/image/regist/unkown.svg'
import IconLoseWeight from '@/static/image/regist/icon_lose_weight.svg'
import IconAddWeight from '@/static/image/regist/icon_add_weight.svg'
import IconKeepWeight from '@/static/image/regist/icon_keep_weight.svg'
import IconHealthyWeight from '@/static/image/regist/icon_healthy_diet.svg'
import { UserGender } from '@/enum/UserEnum'
import CustomCard from './components/CustomCard.vue'

const activeIndex = ref(-1)
const currentTargetIndex = ref(-1)
const birthday = ref('')
const height = ref(120)
const sex = [
  { icon: ManIcon, text: '男' },
  { icon: FemaleIcon, text: '女' },
  { icon: UnkownIcon, text: '保密' },
]
const healthyTarget = [
  { icon: IconLoseWeight, text: '减重' },
  { icon: IconAddWeight, text: '增重' },
  { icon: IconKeepWeight, text: '维持' },
  { icon: IconHealthyWeight, text: '健康饮食' },
]
const userInfo = reactive<{ birthday: string; sex: UserGender; height: number; target: string }>({
  birthday: '',
  sex: 0,
  height: 120,
  target: '',
})
const maskClick = () => {
  uni.showToast({
    title: '点击了遮罩',
    icon: 'none',
  })
}
const onNext = () => {
  const choosedSex: UserGender = sex[activeIndex.value].text === '男' ? UserGender.MALE : UserGender.FEMALE
  const target: string = healthyTarget[currentTargetIndex.value].text
  Object.assign(userInfo, {
    birthday: birthday.value,
    sex: choosedSex,
    height: height.value,
    target,
  })
  uni.navigateTo({
    url: '/pages/resign/regist_leader_four',
  })
}

const onChange = (value: UniHelper.UniDatetimePickerOnChange) => {
  birthday.value = value + ''
}
const onChangeHeight = (value: UniHelper.UniEasyinputOnConfirm) => {
  height.value = Number(value)
}
</script>

<style scoped lang="scss">
.title {
  width: 100rpx;
}
.content {
  padding: 70rpx 42rpx 0 42rpx;
}

.wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 50rpx;
  gap: 15rpx;
}
.sex {
  width: 100%;
}
.item {
  width: 100%;
  text-align: center;
  padding: 10px 0;
  height: 133rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  &.active {
    border: 5rpx solid #5dbe8a;
    border-radius: 10rpx;
  }

  .icon {
    width: 27.56rpx;
    height: 27.56rpx;
  }
  .healthy-icon {
    width: 35rpx;
    height: 35rpx;
  }
  .healthy-text {
    font-weight: 400;
    font-size: 25rpx;
    color: #4b5563;
    line-height: 35rpx;
    margin-bottom: 20rpx;
    text-align: center;
  }
}

.healthy-target {
  display: flex;
  flex-wrap: wrap;
  .item {
    // margin-bottom: 20rpx;
  }
}
</style>
