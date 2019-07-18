<template>
  <div class="sidebar-wrapper">
    <el-menu
      background-color="#545c64"
      text-color="#fff"
      default-active="0"
      active-text-color="#ffd04b"
      class="el-menu"
      :collapse="isSidebarCollapse"
    >
      <img v-if="isSidebarCollapse" width="100%" :src="LogoWithNoTitle" alt srcset />
      <img v-if="!isSidebarCollapse" width="100%" :src="logo" alt srcset />
      <el-menu-item
        v-for="(menuItem,idx) in menuItems"
        :key="menuItem.path"
        @click="skipCurrent(menuItem.path)"
        :index="String(idx)"
      >
        <span slot="title">{{menuItem.meta.title}}</span>
        <i :class="menuItem.meta.icon"></i>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import logo from "@/assets/logo-with-title.png";
import LogoWithNoTitle from "@/assets/logo-no-title.png";

export default {
  props: {
    isSidebarCollapse: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      logo,
      LogoWithNoTitle
    };
  },
  computed: {
    menuItems() {
      return this.$router.options.routes;
    }
  },
  methods: {
    skipCurrent(path) {
      this.$router.push({ path });
    }
  }
};
</script>
<style scoped>
.sidebar-wrapper {
  height: 100%;
  background: #545c64;
}
</style>


