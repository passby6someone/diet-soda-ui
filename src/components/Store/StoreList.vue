<script setup lang="ts">
import {
  NProgress,
  NStatistic,
  NNumberAnimation,
  NCard,
  NGrid,
  NGridItem,
} from "naive-ui";
import type { RENDER_GOODS_INFO } from "diet-soda-engine";
import { storeNumRateFormatter } from "@/utils";
import { nextTick, onBeforeUpdate, onUpdated, ref } from "vue";
import logger from "@/utils/logger";

const props = defineProps<{
  storeGoods: RENDER_GOODS_INFO[];
}>();

const preStoreGoods = ref<RENDER_GOODS_INFO[]>([]);

const _preStoreGoods = ref<RENDER_GOODS_INFO[]>([]);

onBeforeUpdate(() => {
  logger.log("onBeforeUpdate", props.storeGoods, preStoreGoods.value);
  preStoreGoods.value = _preStoreGoods.value;
});

onUpdated(() => {
  logger.log(
    "onUpdated",
    props.storeGoods,
    preStoreGoods.value,
    _preStoreGoods.value
  );

  _preStoreGoods.value = props.storeGoods;
});

logger.log("preStoreGoods", preStoreGoods.value);

function showDiff(current: number, pre: number) {
  const diff = current - pre;
  let result = 0;

  if (isNaN(diff)) {
    result = 0;
  } else {
    result = diff;
  }

  if (result >= 0) {
    return ` + ${result}`;
  } else {
    return ` ${result}`;
  }
}
</script>

<template>
  <div class="container">
    <n-grid :x-gap="12" :y-gap="12" :cols="1">
      <n-grid-item :key="item.key" v-for="(item, index) in $props.storeGoods">
        <n-card hoverable :content-style="{ padding: '6px 12px' }">
          <div class="goods-info">
            <span class="goods-name">{{ item.name }}</span>

            <div class="goods-value-label">
              <n-number-animation
                ref="numberAnimationInstRef"
                show-separator
                :from="preStoreGoods[index]?.value || 0"
                :to="item.value"
                :active="true"
                :duration="800"
              />

              <span class="goods-label">{{
                showDiff(item.value, preStoreGoods[index]?.value || 0)
              }}</span>

              <span class="goods-divide">/</span>

              <span class="goods-label">{{ item.capacity }}</span>
            </div>
          </div>

          <n-progress
            type="line"
            class="progress"
            :percentage="storeNumRateFormatter(item.value, item.capacity)"
            :show-indicator="false"
            processing
          />
        </n-card>
      </n-grid-item>
    </n-grid>
  </div>
</template>

<style lang="less" scoped>
.container {
  padding: 12px;
}

.progress {
  margin-top: 12px;
  height: 12px;
}

.goods-info {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  .goods-name {
    font-weight: 1000;
    font-size: 1.3em;
  }

  .goods-value-label {

  }

  .goods-divide {
    margin: 0 4px;
  }
}
</style>
