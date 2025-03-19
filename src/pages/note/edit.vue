<template>
  <view :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
    <SGNavBar title="编辑计划" />
    <view class="pt-1rpx">
      <view class="mt-120rpx">
        <uni-card class="" :title="`编辑计划 - ${plan.planCategory}`">
          <view class="space-y-4">
            <!-- 计划内容 -->
            <view class="section">
              <text class="font-bold mb-2 block">计划内容</text>
              <textarea :maxlength="100" class="h-200rpx ellipsis2" v-model="content" placeholder="请输入计划内容" />
            </view>

            <!-- 饮食 -->
            <view class="section">
              <text class="font-bold mb-2 block">饮食</text>
              <uni-forms ref="form" label-position="left">
                <uni-forms-item
                  v-for="(meals, index) in plan.meals"
                  :label-width="50"
                  :key="meals.value"
                  :label="meals.title"
                >
                  <uni-swipe-action class="flex-col-nocenter gap-10rpx">
                    <uni-swipe-action-item :right-options="swipeOptions" @click="deleteMeal(index)">
                      <up-input v-model="plan.meals[index].value" :placeholder="`请输入饮食计划 ${index + 1}`" />
                    </uni-swipe-action-item>
                  </uni-swipe-action>
                </uni-forms-item>
              </uni-forms>
              <button @click="addMeal" class="bg-#5DBE8A text-#fff mt-20rpx">添加饮食</button>
            </view>
          </view>
        </uni-card>

        <uni-card title="运动计划">
          <!-- 运动 -->
          <view class="section">
            <text class="font-bold mb-2 block">运动</text>

            <uni-swipe-action class="flex-col-nocenter gap-10rpx">
              <uni-swipe-action-item
                v-for="(exercise, index) in plan.exercises"
                :key="exercise"
                :right-options="swipeOptions"
                @click="deleteExercise(index)"
              >
                <up-input
                  :maxlength="80"
                  v-model="plan.exercises[index]"
                  :placeholder="`请输入运动计划 ${index + 1}`"
                />
              </uni-swipe-action-item>
            </uni-swipe-action>

            <button @click="addExercise" class="bg-#5DBE8A text-#fff mt-20rpx">添加运动</button>
          </view>

          <!-- 卡路里 -->
          <view class="section">
            <text class="font-bold mb-2 block">卡路里</text>
            <view class="flex items-center space-x-2">
              <up-input v-model.number="plan.todayCalorieCompleted" placeholder="已完成卡路里" type="number" />
              <text>/</text>
              <up-input v-model.number="plan.todayCalorieTarget" placeholder="目标卡路里" type="number" />
            </view>
          </view>

          <!-- 运动时间 -->
          <view class="section">
            <text class="font-bold mb-2 block">运动时间</text>
            <view class="flex items-center space-x-2">
              <up-input v-model.number="plan.todayExerciseCompleted" placeholder="已完成运动时间min" type="number" />
              <text>/</text>
              <up-input v-model.number="plan.todayExerciseTarget" placeholder="目标运动时间mim" type="number" />
            </view>
          </view>

          <!-- 状态 -->
          <view class="section">
            <text class="font-bold mb-2 block">状态</text>
            <uni-data-checkbox v-model="plan.status" :value="value" :localdata="status"></uni-data-checkbox>
          </view>
        </uni-card>

        <!-- 保存按钮 -->
        <view class="section px-28rpx mb-20rpx">
          <button class="bg-#5DBE8A text-#fff" @click="savePlan">保存计划</button>
        </view>
      </view>
    </view>

    <up-popup
      mode="center"
      :show="mealPopup"
      @close="mealPopup = false"
      :close-on-click-overlay="true"
      title="饮食计划"
      round="20rpx"
    >
      <uni-card shadow="none" :border="false" class="w-600rpx">
        <template #title>{{ mealItem.label }}</template>
        <uni-forms ref="form" label-width="200rpx">
          <uni-forms-item required label="计划标题" name="">
            <uni-easyinput v-model="mealItem.title" :maxlength="80"></uni-easyinput>
          </uni-forms-item>
          <uni-forms-item required label="内容" name="">
            <uni-easyinput v-model="mealItem.value" :maxlength="80"></uni-easyinput>
          </uni-forms-item>
        </uni-forms>
        <view class="w-100%">
          <button class="bg-#5DBE8A text-#fff w-50%" @click="onHandleSave">保存</button>
        </view>
      </uni-card>
    </up-popup>
  </view>
</template>

<script setup lang="ts">
import { getHealthPlanByIdAPI, updatePlanByUserAPI } from '@/services/plan/planBaseModule'
import Utils from '@/utils'
import { onLoad } from '@dcloudio/uni-app'
import { computed, ref } from 'vue'

const mealPopup = ref(false)

// #ifdef APP-PLUS
const { safeAreaInsets } = uni.getWindowInfo()
// #endif

const mealItem = ref<{
  title: string
  label?: '添加饮食计划' | '添加运动计划' | ''
  value: string
}>({
  title: '',
  value: '',
})
const status = [
  {
    text: '未开始',
    value: 0,
  },
  {
    text: '进行中',
    value: 1,
  },
  {
    text: '已完成',
    value: 2,
  },
]

// 定义每日计划的数据结构
interface DailyPlan {
  createdAt: string
  exercises: string[]
  meals: {
    title: string
    value: string
  }[]
  planCategory: string
  planContent: string
  planDate: string
  progress: number
  status: string
  todayCalorieCompleted: number
  todayCalorieTarget: number
  todayExerciseCompleted: number
  todayExerciseTarget: number
}

// 初始化数据
const plan = ref<DailyPlan>({
  createdAt: '2023-10-01',
  exercises: [''],
  meals: [],
  planCategory: '饮食',
  planContent: '早餐吃1000千卡',
  planDate: '2023-10-01',
  progress: 50,
  status: '未开始',
  todayCalorieCompleted: 1500,
  todayCalorieTarget: 2000,
  todayExerciseCompleted: 30,
  todayExerciseTarget: 60,
})

const content = computed(() => {
  return plan.value.planContent.replaceAll(']', '').replaceAll('[', '')
})

const value = computed(() => {
  const map = new Map<string, number>()
  map.set('未开始', 0)
  map.set('进行中', 1)
  map.set('已完成', 2)

  return map.get(plan.value.status) || 0
})
const swipeOptions = ref([
  {
    text: '删除',
    style: {
      backgroundColor: '#d2524e',
      color: '#fff',
      fontSize: '16rpx',
    },
  },
])

const onHandleSave = () => {
  if (mealItem.value.title === '添加饮食计划') {
    plan.value.meals.push({ title: mealItem.value.title, value: mealItem.value.value })
    mealItem.value = { title: '', value: '', label: '' }
    mealPopup.value = false
  } else if (mealItem.value.title === '添加运动计划') {
    plan.value.exercises.push(mealItem.value.value)
    mealItem.value = { title: '', value: '', label: '' }
    mealPopup.value = false
  }
}
const deleteMeal = (index: number) => {
  Utils.showModal({
    title: '提示',
    content: `确定删除计划 ${plan.value.meals[index]} 吗？`,
    confirm: () => {
      plan.value.meals = plan.value.meals.filter((item, i) => i !== index)
    },
    cancel: () => {},
  })
}
const deleteExercise = (index: number) => {
  // plan.value.exercises.splice(index, 1)
  Utils.showModal({
    title: '提示',
    content: `确定删除运动计划 ${plan.value.exercises[index]} 吗？`,
    confirm: () => {
      plan.value.exercises = plan.value.exercises.filter((item, i) => i !== index)
    },
    cancel: () => {},
  })
}

// 添加饮食计划
const addMeal = () => {
  mealItem.value.label = '添加饮食计划'
  mealPopup.value = true
}

// 添加运动计划
const addExercise = () => {
  // plan.value.exercises.push('')
  mealItem.value.label = '添加运动计划'
  mealPopup.value = true
}

// 保存计划
const savePlan = async () => {
  // 这里可以调用 API 保存数据

  const meals = plan.value.meals.map((item) => {
    return item.title + ':' + item.value
  })
  console.log(meals)

  const data = {
    ...plan.value,
    meals: JSON.stringify(meals),
    exercises: JSON.stringify(plan.value.exercises),
  }

  const res = await updatePlanByUserAPI(data as any)

  if (res.code === 200) {
    uni.showToast({
      title: '计划已保存',
      icon: 'success',
    })
  }
}

onLoad(async (param) => {
  console.log(param)
  if (param?.id) {
    const res = await getHealthPlanByIdAPI(param.id)
    if (res.code === 200) {
      const mealsList = JSON.parse(res.data.meals) as string[]
      const exercisesList = JSON.parse(res.data.exercises) as string[]
      const meals = mealsList.reduce((acc, item) => {
        const [title, value] = item.split(':')
        acc.push({ title, value })
        return acc
      }, [] as { title: string; value: string }[])

      plan.value = {
        ...res.data,
        exercises: JSON.parse(res.data.exercises),
        meals,
      }

      // plan.value = res.data
    }
  }
  // getHealthPlanByIdAPI
})
</script>

<style>
/* 使用 UnoCSS，无需额外编写 CSS */
</style>
