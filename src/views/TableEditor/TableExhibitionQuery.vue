<template>
  <div>
    <el-button type="text" @click="handleClipboard(srcTableCode,$event)">复制代码</el-button>
    <el-button type="text" @click="skipToEditorCode">在线编辑</el-button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { handleClipboard } from "@/utils";

export default {
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