<template>
  <div class="header-container">
    <div class="left">
      <Collapse></Collapse>
      <BreadCrumb></BreadCrumb>
    </div>
    <div class="right">
      <span style="padding-right: 15px; color: #fff">欢迎您，{{ name }}</span>
      <LoginOut></LoginOut>
    </div>
  </div>
</template>
<script setup lang="ts">
import BreadCrumb from "./BreadCrumb.vue";
import Collapse from "./Collapse.vue";
import LoginOut from "./LoginOut.vue";
import { useUserStore } from "@/store/user";
import { computed } from "vue";

const store = useUserStore();
const name = computed(() => {
  return store.getNickName;
});
</script>
<style scoped lang="scss">
.header-container {
  display: flex;
  align-items: center;
}
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  .left {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .right {
    display: flex;
    align-items: center;
  }
}
</style>
