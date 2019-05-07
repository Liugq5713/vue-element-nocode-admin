<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>JSON表单对象</span>
        <el-button size="mini" type="primary" style="float:right" @click="gen">生成表单</el-button>
      </div>
      <el-input type="textarea" :autosize="{ minRows: 5}" placeholder="请输入内容" v-model="formJson"></el-input>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formJson: undefined
    };
  },
  methods: {
    gen() {
      const v = eval(`this.formJson`);
      const f = JSON.stringify(this.formJson);
      const j = f.replace(/[\r\n]/gm, "");
      console.log(v, f, j);
      console.log(typeof this.formJson, typeof v, v);
      this.$emit(JSON.parse(this.formJson));
    }
  }
};
</script>