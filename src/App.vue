<script setup lang="ts">
import { RouterView, useRouter } from "vue-router";
import {
  darkTheme,
  NConfigProvider,
  NGlobalStyle,
  NIcon,
  NLayout,
  NLayoutSider,
  NMenu,
  type MenuOption,
} from "naive-ui";
import { h, type Component } from "vue";
import { BriefcaseOutline, FlagOutline } from "@vicons/ionicons5";

function renderIcon (icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
  {
    key: "building",
    label: "生产",
    icon: renderIcon(BriefcaseOutline),
  },
  {
    key: "technology",
    label: "科技",
    icon: renderIcon(FlagOutline),
  },
];

const router = useRouter();

function handleMenuUpdate (value: string) {
  console.log(value);

  if (value === "building") {
    router.push("/");
  } else if (value === "technology") {
    router.push("/technology");
  }
}
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <n-layout has-sider>
      <n-layout-sider
        bordered
        show-trigger
        collapse-mode="width"
        :collapsed="true"
        :collapsed-width="64"
        :width="160"
        :native-scrollbar="false"
      >
        <n-menu
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
          default-value="building"
          @update-value="handleMenuUpdate"
        />
      </n-layout-sider>
      <n-layout>
        <RouterView />
      </n-layout>
    </n-layout>
    <n-global-style />
  </n-config-provider>
</template>

<!-- <style scoped lang="less" src="./App.less"></style> -->
