<template>
  <uni-row class="search">
    <uni-col :span="1" :offset="1" class="icon">
      <uni-icons type="arrow-left" color="#4B5563" size="20" @click="goBack" />
    </uni-col>

    <uni-col :span="21" :offset="1">
      <uni-search-bar radius="10" @confirm="search" :focus="true" v-model="searchValue"> </uni-search-bar>
    </uni-col>
  </uni-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['search'])
const searchValue = ref('')
const value = ref('10')

const goBack = () => {
  uni.navigateBack()
}
const search = (value: UniHelper.UniSearchBarOnInputEvent) => {
  console.log('search', value.value)
  emit('search', value.value)
}
</script>

<style lang="scss" scoped>
.search {
  align-items: center;
  display: flex;
}

.icon {
  display: flex;
  height: 80rpx;
  align-items: center;
}
</style>
