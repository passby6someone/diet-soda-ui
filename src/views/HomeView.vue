<script setup lang="ts">
import { reactive } from "vue";
import { DietSodaEvent, EVENTS_TYPE, type GOODS_INFO } from "diet-soda-engine";
import StoreList from "@/components/Store/StoreList.vue";

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
  <main>
    <StoreList :storeGoods="state.storeGoods" />
  </main>
</template>
