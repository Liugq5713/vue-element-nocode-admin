<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>表单属性</span>
      <div style="float:right">
        <el-input v-model.trim="form.formObj" style="width:150px;margin:0 10px" placeholder="表单对象"></el-input>
        <el-input
          v-if="form.is_validated"
          v-model.trim="form.ref"
          placeholder="表单的Ref值"
          style="width:150px"
        ></el-input>
        <el-checkbox style="width:150px;margin:0 10px" v-model="form.is_validated" label="true">需要验证</el-checkbox>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      form: {
        formObj: "",
        ref: "",
        is_validated: true
      }
    };
  },
  watch: {
    form: {
      handler: function(val) {
        this.$emit("change", val);
      },
      deep: true
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
</style>
