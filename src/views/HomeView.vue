<script setup lang="ts">
import { reactive } from "vue";
import { DietSodaEvent, EVENTS_TYPE, type GOODS_INFO } from "diet-soda-engine";
import StoreList from "@/components/Store/StoreList.vue";
import { NGrid, NGi } from "naive-ui";

const state = reactive<{
  storeGoods: GOODS_INFO[];
}>({
  storeGoods: [],
});

DietSodaEvent.subscribe(EVENTS_TYPE.AFTER_UPDATE, (data) => {
  console.log("event", data);
  state.storeGoods = data.store;
});
</script>

<template>
  <n-grid :cols="4" class="gird-container">
    <n-gi :span="1" class="grid-item">
      <StoreList :storeGoods="state.storeGoods" />
    </n-gi>
    <n-gi :span="2" class="grid-item">
      <!-- <StoreList :storeGoods="state.storeGoods" /> -->
    </n-gi>
    <n-gi :span="1" class="grid-item">
      <!-- <StoreList :storeGoods="state.storeGoods" /> -->
    </n-gi>
  </n-grid>
</template>

<style lang="less" scoped>
.gird-container {
  height: 100vh;

  .grid-item {
    &:not(:last-child) {
      border-right: 1px solid #eee;
    }
  }
}
</style>
