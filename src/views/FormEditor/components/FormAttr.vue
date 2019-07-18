<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>{{ $t("form.attribute")}}</span>
      <el-button style="float: right; padding: 3px 10px" type="text" @click="skipToEditor">在线编辑</el-button>
      <el-button
        style="float: right; padding: 3px 0"
        type="text"
        @click="handleClipboard(srcFormCode,$event)"
      >复制源代码</el-button>
    </div>
    <div>
      <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item label="表单对象">
          <el-input v-model.trim="form.formObj" style="width:150px;" placeholder="表单对象"></el-input>
        </el-form-item>
        <el-form-item label="更新方法">
          <el-input v-model.trim="form.method" style="width:150px" placeholder="更新方法"></el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox style="width:150px" v-model="form.validated" label="true">需要验证</el-checkbox>
        </el-form-item>
        <el-form-item label="表单Ref">
          <el-input v-model.trim="form.ref" style="width:150px;" placeholder="表单的Ref值"></el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox style="width:150px;margin:0 1px" v-model="form.confirmed" label="true">双重确认</el-checkbox>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>

<script>
import { mapGetters } from "vuex";
import { handleClipboard } from "@/utils";

export default {
  data() {
    return {
      form: {
        formObj: "defaultFormObj",
        ref: "defaultRef",
        validated: true,
        confirmed: false,
        method: "defaultMethod"
      }
    };
  },
  computed: {
    ...mapGetters(["srcFormCode"])
  },

  watch: {
    form: {
      handler: function(val) {
        this.$store.commit("SET_FORM_ATTRIBUTE", {
          ...val,
          ref: val.validated && val.ref
        });
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    handleClipboard(text, evnet) {
      handleClipboard(text, evnet)
        .then(() => {
          this.$message.success("已经复制到剪贴板");
        })
        .catch(() => {
          this.$message.error("未能复制到剪贴板");
        });
    },
    skipToEditor() {
      this.$router.push({ path: "code-editor" });
    }
  }
};
</script>

<style>
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.formItemMargin {
  margin-right: 10px;
}
</style>
