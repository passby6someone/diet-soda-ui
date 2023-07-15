<script setup lang="ts">
import StoreList from "@/components/Store/StoreList.vue";
import DietSodaEvents from "diet-soda-engine";

console.log('DietSodaEvents', DietSodaEvents);
</script>

<template>
  <main>
    <StoreList
      :storeGoods="[
        {
          wood: {
            key: 'wood',
            name: 'Wood',
            value: 0,
            capacity: 100,
          },
        },
      ]"
    />
  </main>
</template>
