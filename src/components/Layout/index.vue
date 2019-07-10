<template>
  <el-container class="container">
    <el-aside width="300px;">
      <Sidebar />
    </el-aside>
    <el-container>
      <el-header>
        <Navbar />
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
