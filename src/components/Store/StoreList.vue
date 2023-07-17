<script setup lang="ts">
import { NProgress, NRow, NStatistic, NCol, NNumberAnimation } from "naive-ui";
import type { GOODS_INFO } from "diet-soda-engine";
import { storeNumRateFormatter } from "@/utils";
import { ref, onUpdated } from "vue";

const props = defineProps<{
  storeGoods: GOODS_INFO[];
}>();

const preStoreGoods = ref<GOODS_INFO[]>([]);

onUpdated(() => {
  preStoreGoods.value = props.storeGoods;
});
</script>

<template>
  <div class="container">
    <div :key="item.key" v-for="(item, index) in props.storeGoods">
      <n-row>
        <n-col :span="24">
          <n-statistic :label="item.name" tabular-nums>
            <n-number-animation
              ref="numberAnimationInstRef"
              show-separator
              :from="preStoreGoods[index]?.value || 0"
              :to="item.value"
              :active="true"
              :duration="800"
            />
            <template #suffix>
              {{ item.diff > 0 ? `+ ${item.diff}` : `- ${item.diff}` }} / {{ item.capacity }}
            </template>
          </n-statistic>
        </n-col>
      </n-row>
      <n-progress
        type="line"
        class="progress"
        :percentage="storeNumRateFormatter(item.value, item.capacity)"
        :indicator-placement="'inside'"
        processing
      />
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  padding: 12px;
}

.progress {
  margin-top: 12px;
}
</style>
