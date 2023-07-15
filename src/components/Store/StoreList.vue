<script setup lang="ts">
import { NProgress } from "naive-ui";
import type { GOODS_INFO } from "diet-soda-engine";

const props = defineProps<{
  storeGoods: GOODS_INFO[];
}>();
</script>

<template>
  <div class="container">
    <div :key="item.key" v-for="item in props.storeGoods">
      <div>{{ item.value }} / {{ item.capacity }}</div>
      <n-progress
        type="line"
        :percentage="parseFloat(((item.value / item.capacity) * 100).toFixed(2))"
        :indicator-placement="'inside'"
        processing
      />
    </div>
  </div>
</template>

<style lang="less" scoped></style>
