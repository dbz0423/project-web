<template>
  <el-dropdown placement="bottom-start">
    <span class="el-dropdown-link">
      <img class="userimg" src="@/assets/user.jpg" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>修改密码</el-dropdown-item>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import useInstance from "@/hooks/useInstance";
// 获取全局golbal
const { global } = useInstance();

// 退出登录
const logout = async () => {
  // 信息确定
  const confirm = await global.$myConfirm("确定退出登录吗？");
  if (confirm) {
    // 清空数据
    localStorage.clear();
    // 跳转去登录
    window.location.href = "/login";
  }
};
</script>

<style scoped lang="scss">
.el-dropdown-link:focus {
  outline: none;
}
.userimg {
  height: 45px;
  width: 45px;
  border-radius: 50%;
  cursor: pointer;
  background-color: #fff;
}
</style>
