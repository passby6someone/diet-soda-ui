<script setup lang="ts">
import { ref } from "vue";
import { DietSodaEvent, EVENTS_TYPE, type MANAGERS } from "diet-soda-engine";
import StoreList from "@/components/Store/StoreList.vue";
import { NGrid, NGi } from "naive-ui";
import { BUILDING_TYPE_MAP } from "diet-soda-engine";
import logger from "@/utils/logger";

const storeGoods = ref([]);

DietSodaEvent.subscribe(
  EVENTS_TYPE.AFTER_UPDATE,
  (data: { managers: MANAGERS }) => {
    logger.log("AFTER_UPDATE", data);

    storeGoods.value = data.managers.store.getStoreRenderInfo();

    logger.log("storeGoods", storeGoods.value);
  }
);

const build = () => {
  logger.log("build");

  DietSodaEvent.emit(EVENTS_TYPE.BUILD, {
    buildingType: BUILDING_TYPE_MAP.Sawmill,
    num: 1,
  });
};

const devRunTick = () => {
  logger.log("devRunTick");
  DietSodaEvent.emit(EVENTS_TYPE.DEV_RUN_TICK);
};

</script>

<template>
  <n-grid :cols="4" class="gird-container">
    <n-gi :span="3" class="grid-item">
      <div @click="devRunTick">跑一帧</div>
      <div @click="build">建造伐木场</div>
    </n-gi>
    <n-gi :span="1" class="grid-item">
      <StoreList :storeGoods="storeGoods" />
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
