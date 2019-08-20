<template>
  <div class="sidebar-wrapper">
    <a
      href="https://github.com/Liugq5713/vue-element-nocode-admin"
      target="_blank"
    >
      <img
        style="float:left;margin-left:10px;"
        height="60px"
        :src="logo"
        alt
        srcset
      >
    </a>
    <el-menu
      style="float:right"
      :default-active="$route.path"
      active-text-color="#2052af"
      mode="horizontal"
    >
      <el-menu-item
        v-for="menuItem in menuItems"
        :key="menuItem.path"
        :index="String(menuItem.path)"
        @click="skipCurrent(menuItem.path)"
      >
        <span slot="title">{{ menuItem.meta.title }}</span>
        <i :class="menuItem.meta.icon" />
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
  background: #fff;
  border-bottom: 1px solid #dcdfe6;
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



