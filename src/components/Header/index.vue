<template>
  <div class="header">
    <div style="padding-top:10px;float:right;padding-right:10px">
      <router-link to="code-editor" target="_blank">
        <el-button
          size="mini"
          style="margin-left:10px"
          icon="el-icon-edit"
          type="success"
        >{{ $t("test") }}在线编辑</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  width: 100%;
  height: 100%;
  background-color: rgb(24, 23, 23);
}
</style>
