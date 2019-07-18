<template>
  <div class="table-query">
    <div>
      查询项
      <span v-for="header in headers" :key='header.value'>
      <el-tag v-if="header.query" type='primary' style="margin-left:10px" >{{header.label}}</el-tag>
      </span>
    </div>
    <div>
      <el-button type="text" @click="handleClipboard(srcTableCode,$event)">复制代码</el-button>
      <el-button type="text" @click="skipToEditorCode">在线编辑</el-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { handleClipboard } from "@/utils";

export default {
  props:{
    headers:{
      type:Array,
      required:true
    }
  },
  computed: {
    ...mapGetters(["srcTableCode"])
  },
  methods: {
    handleClipboard(text, evnet) {
      handleClipboard(text, evnet).then(() => {
        this.$message.success("已经复制到剪贴板");
      });
    },
    skipToEditorCode() {
      this.$router.push(`/code-editor?code=table`);
    }
  }
};
</script>

<style scoped>
.table-query{
  display: flex;
  justify-content:space-between;
}
</style>
