<template>
  <el-container>
    <el-main>
      <el-card class="box-card">
        表单编辑区
        <test/>
      </el-card>
    </el-main>
    <el-aside width="400px">
      <el-card class="box-card">
        <!-- <Asset/> -->
      </el-card>
    </el-aside>
  </el-container>
</template>

<script>
import Asset from "./components/Asset";
import test from "./components/test";
export default {
  components: {
    Asset,
    test
  }
};
</script>