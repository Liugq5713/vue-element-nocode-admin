<template>
  <div class="sidebar-wrapper">
    <el-menu
      background-color="#545c64"
      text-color="#fff"
      :default-active="$route.path"
      active-text-color="#ffd04b"
      class="el-menu-vertical-demo el-menu"
      :collapse="isSidebarCollapse"
    >
      <img width="100%" :src="isSidebarCollapse?LogoWithNoTitle:logo" alt srcset />

      <el-menu-item
        v-for="menuItem in menuItems"
        :key="menuItem.path"
        @click="skipCurrent(menuItem.path)"
        :index="String(menuItem.path)"
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
      LogoWithNoTitle,
        isCollapse: true
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
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}


</style>

<style>
   /* .left-enter, .left-leave-to {
      transform: translate3d(-100%, 0, 0)
    }
    .left-leave, .left-enter-to {
      transform: translate3d(0, 0, 0)
    }
    .left-enter-active, .left-leave-active {
      transition: all .2s
    }
    .top-enter, .top-leave-to {
      transform: translate3d(0, -100%, 0)
    }
    .top-leave, .top-enter-to {
      transform: translate3d(0, 0, 0)
    }
    .top-enter-active, .top-leave-active {
      transition: all .2s
    } */
</style>



