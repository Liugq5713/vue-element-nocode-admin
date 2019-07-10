<template>
  <div class="sidebar-wrapper">
    <el-scrollbar class="sidebar-wrapper">
      <el-menu
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        class="el-menu"
      >
        <img :src="logo" alt srcset />
        <el-menu-item v-for="menuItem in menuItems" :key="menuItem.path" index="1">
          <el-link class="link" :href="menuItem.path" :underline="false">{{menuItem.meta.title}}</el-link>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import logo from "./logo.png";

export default {
  data() {
    return {
      logo
    };
  },
  computed: {
    menuItems() {
      return this.$router.options.routes;
    }
  }
};
</script>
<style scoped>
.sidebar-wrapper {
  height: 100%;
  background: #545c64;
}
.link {
  color: rgb(191, 203, 217) !important;
}
</style>
