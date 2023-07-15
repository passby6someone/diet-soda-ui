<script setup lang="ts">
import { NProgress } from "naive-ui";

const props = defineProps<{
  storeGoods: {
    key: string;
    name: string;
    value: number;
    capacity: number;
  }[];
}>();
</script>

<template>
  <div class="container">
    <div :key="item.key" v-for="item in props.storeGoods">
      <n-progress
        type="line"
        :percentage="60"
        :indicator-placement="'inside'"
        processing
      />
    </div>
  </div>
</template>

<style lang="less" scoped></style>
