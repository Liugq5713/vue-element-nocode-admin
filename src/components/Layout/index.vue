<template>
  <el-container class="container">
    <el-aside width="300px;">
      <Sidebar :isSidebarCollapse="isSidebarCollapse" />
    </el-aside>
    <el-container>
      <el-header style="padding:0">
        <Navbar :isSidebarCollapse="isSidebarCollapse" />
      </el-header>
      <el-main>
        <AppMain />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AppMain from "./components/AppMain";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
export default {
  components: {
    AppMain,
    Navbar,
    Sidebar
  },
  data() {
    return {
      isSidebarCollapse: true
    };
  }
};
</script>

<style scoped>
.container {
  height: 100%;
}
.sidebar {
  height: 100%;
}
</style>
