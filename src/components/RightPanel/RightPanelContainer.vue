<template>
  <div class="rightPanel">
    <div class="btn--wrapper">
      <el-button size="mini" @click="open">
        <span style="writing-mode: vertical-rl;">
          <i class="el-icon-copy-document" style="margin-bottom:4px"></i>复制代码
        </span>
      </el-button>
      <el-button size="mini" style="margin-left:-0px">
        <span style="writing-mode: vertical-rl;">
          <i class="el-icon-arrow-left" style="margin-bottom:4px"></i>显示代码
        </span>
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    open() {}
  }
};
</script>

<style scoped>
.rightPanel {
  position: fixed;
  right: 0;
  top: 30vh;
}

.rightPanel >>> .el-button {
  padding: 12px 10px;
}

.btn--wrapper {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 200px;
}
</style>
