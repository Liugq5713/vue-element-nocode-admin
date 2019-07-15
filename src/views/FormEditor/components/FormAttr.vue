<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>{{ $t("form.attribute")}}</span>
      <el-button style="float: right; padding: 3px 0" type="text" @click="copy">复制源代码</el-button>
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

    <code class="code" style="position:absolute;top:-999999px">
      <div style="overflow:auto">
        <pre ref="srcCode">
    {{srcFormCode}}
    </pre>
      </div>
    </code>
  </el-card>
</template>

<script>
import { mapGetters } from "vuex";
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
    copy() {
      const clipboardDiv = this.$refs["srcCode"];
      clipboardDiv.focus();
      window.getSelection().removeAllRanges();
      var range = document.createRange();
      range.setStartBefore(clipboardDiv.firstChild);
      range.setEndAfter(clipboardDiv.lastChild);
      window.getSelection().addRange(range);
      try {
        if (document.execCommand("copy")) {
          this.$message.success("已复制到剪贴板");
        } else {
          this.$message.error("未能复制到剪贴板，请全选后右键复制");
        }
      } catch (err) {
        this.$message.error("未能复制到剪贴板，请全选后右键复制");
      }
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
