<template>
  <up-number-box v-model="value">
    <template #minus>
      <view class="minus">
        <uni-icons type="minus" color="" size="24" />
      </view>
    </template>
    <template #input>
      <text style="width: 50px; text-align: center" class="input">{{ value }}</text>
    </template>
    <template #plus>
      <view class="plus">
        <uni-icons type="plus" size="24" />
      </view>
    </template>
  </up-number-box>
</template>

<script setup lang="ts">
const value = defineModel<number>('value', { type: Number, default: 0 })
</script>

<style scoped></style>
