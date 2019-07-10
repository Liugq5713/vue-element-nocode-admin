<template>
  <div class="sidebar-wrapper">
    <el-scrollbar class="sidebar-wrapper">
      <el-menu
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        class="el-menu"
        :collapse="isSidebarCollapse"
      >
        <img :src="logo" alt srcset />
        <el-menu-item v-for="menuItem in menuItems" :key="menuItem.path" index="1">
          <router-link class="link" :to="menuItem.path" :underline="false">
            <i :class="menuItem.meta.icon"></i>
            {{menuItem.meta.title}}
          </router-link>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import logo from "./logo.png";

export default {
  props: {
    isSidebarCollapse: {
      type: Boolean,
      default: false
    }
  },
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
a {
  text-decoration: none;
}
.link {
  display: inline-block;
  width: 100%;
  height: 100%;
  color: rgb(191, 203, 217) !important;
}
</style>
