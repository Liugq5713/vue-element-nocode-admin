<template>
  <el-container>
    <el-header style="padding:0">
      <Sidebar :is-sidebar-collapse="isSidebarCollapse" />
    </el-header>
    <el-main>
      <AppMain />
    </el-main>
    <Footer />
  </el-container>
</template>

<script>
import AppMain from "./components/AppMain";
import Sidebar from "./components/Sidebar";
import Footer from './components/Footer'
export default {
  components: {
    AppMain,
    Sidebar,
    Footer
  },
  data() {
    return {
      isSidebarCollapse: true
    };
  },


};
</script>

<style scoped>
.container {
  height: 100%;
  background-color: #f0f2f5;
}
.sidebar {
  height: 100%;
}
</style>
